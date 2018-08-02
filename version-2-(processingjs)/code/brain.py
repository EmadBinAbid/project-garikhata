## import  re
from xml.dom import minidom
from xml_manager import *           #(custom  module)
from global_manager import *        #(custom  module)
from js_manager import *          #(custom  module)


def parse(xml_filename, html_filename):                     ##Takes a '.svg' file and generates an 'html' file from it
    shapes_list = xml_shapename_extractor(xml_filename)

    # Parsing a '.svg' file by tag names
    xml_svg_file = minidom.parse(xml_filename)

    # These tags are requirement dependent. The code is only written for the tags provided in the sample .svg files
    tag_g = xml_svg_file.getElementsByTagName("g")

    tag_rect = xml_svg_file.getElementsByTagName("rect")
    tag_circle = xml_svg_file.getElementsByTagName("circle")
    tag_ellipse = xml_svg_file.getElementsByTagName("ellipse")
    tag_line = xml_svg_file.getElementsByTagName("line")
    tag_polyline = xml_svg_file.getElementsByTagName("polyline")
    tag_polygon = xml_svg_file.getElementsByTagName("polygon")

    ##Shapes deep information starts...
    rects_info = list()
    circles_info = list()
    ellipses_info = list()
    lines_info = list()
    polylines_info = list()
    polygons_info = list()

    for rect in tag_rect:
        rects_info.append((rect.attributes["class"].value,
                           [(int(float(rect.attributes["x"].value)), int(float(rect.attributes["y"].value))),
                           (int(float(rect.attributes["width"].value)), int(float(rect.attributes["height"].value)))]))

    for circle in tag_circle:
        circles_info.append((circle.attributes["class"].value,
                             (int(float(circle.attributes["cx"].value)), int(float(circle.attributes["cy"].value)),
                              int(float(circle.attributes["r"].value)))))
    for ellipse in tag_ellipse:
        ellipses_info.append((ellipse.attributes["class"].value,
                           [(int(float(ellipse.attributes["x"].value)), int(float(ellipse.attributes["y"].value))),
                            (int(float(ellipse.attributes["width"].value)), int(float(ellipse.attributes["height"].value)))]))
    for line in tag_line:
        lines_info.append((line.attributes["class"].value,
                           [(int(float(line.attributes["x1"].value)), int(float(line.attributes["y1"].value))),
                           (int(float(line.attributes["x2"].value)), int(float(line.attributes["y2"].value)))]))
    for polyline in tag_polyline:
        polylines_info.append(
            (polyline.attributes["class"].value, coordinate_extractor(polyline.attributes["points"].value, " ")))
    for polygon in tag_polygon:
        polygons_info.append(
            (polygon.attributes["class"].value, coordinate_extractor(polygon.attributes["points"].value, " ")))

    ##Shapes deep information ends!

    ##List containing tuples of shape name and shape count
    count_shapes = [("rect", len(rects_info)), ("circle", len(circles_info)), ("ellipse", len(ellipses_info)), ("line", len(lines_info)),
                    ("polyline", len(polylines_info)), ("polygon", len(polygons_info))]

    js_filler = ""

    for shape in shapes_list:
        js_filler += '//' + shape + '\n'
        js_filler += 'var array_' + shape + 's_' + html_filename[0:len(html_filename)-3] + ' = [];\n' \
                        'var pointer_' + shape + 's_' + html_filename[0:len(html_filename)-3] + ' = null;\n\n'
    js_filler += '\n\n'

    js_filler += '//Map size\n' \
                 'var zoom = 0.5;\n\n'

    if(html_filename == "basemap.js" or html_filename == "plotprofile.js"):
        js_filler += '//Alignment -> Only a basemap property\n' \
                 'var alignX = 0;\n' \
                 'var alignY = 0;\n\n'


    js_filler += '//Tooltip\n' \
                 'var tip = null;\n\n'

    js_filler += 'function ' + html_filename[0:len(html_filename)-3] + 'Data()\n' \
                    '{\n'

                                                                            ##canvas name hard-coded. FIX IT!
    js_function = ''
    js_function += 'function ' + html_filename[0:len(html_filename) - 3] + '(plotInfoArray)\n'
    js_function += '{\n'
    js_function += '\t//clear();\n' \
                   '\tvar i = 0;\n\n'
    print(rects_info)

    ##Autogenerating PLOT IDs' variable

    PLOTID = ""
    if(html_filename == "basemap.js"):
        PLOTID = "GARIKHATA_BASE"
    elif(html_filename == "plotprofile.js"):
        PLOTID = "GARIKHATA_PLOT"

    ## Writing JavaScript for shapes
    for shape in count_shapes:

        if(shape[1] != 0):

            # *********************************************** RECTANGLE ***********************************************

            if(shape[0] == "rect"):
                shapeCounter = 0
                js_filler += '\t//' + shape[0] + '\n'

                for rect_no in range(len(rects_info)):
                    if (rects_info[rect_no][0] == 'cls-1'):
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(rects_info[rect_no][1])):
                            js_filler += 'createVector(' + str(rects_info[rect_no][1][coordinate][0]) + '*zoom + alignX' + ', ' + \
                                         str(rects_info[rect_no][1][coordinate][1]) + '*zoom + alignY' + ')'

                            if (coordinate != len(rects_info[rect_no][1]) - 1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[
                                                                      0:len(html_filename) - 3] + ' = new Rectangle(' + \
                                     shape[0] + str(shapeCounter) + ', "stroke");\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[' + str(
                            rect_no) + '] = pointer_' + shape[0] + 's_' + html_filename[
                                                                          0:len(html_filename) - 3] + ';\n\n'

                    if (rects_info[rect_no][0] == 'cls-2'):
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(rects_info[rect_no][1])):
                            js_filler += 'createVector(' + str(rects_info[rect_no][1][coordinate][0]) + '*zoom + alignX' + ', ' + \
                                         str(rects_info[rect_no][1][coordinate][1]) + '*zoom + alignY' + ')'

                            if (coordinate != len(rects_info[rect_no][1]) - 1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[
                                                                      0:len(html_filename) - 3] + ' = new Rectangle(' + \
                                     shape[0] + str(shapeCounter) + ', "fill");\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[' + str(
                            rect_no) + '] = pointer_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + ';\n\n'

                    if (rects_info[rect_no][0] == 'cls-3'):
                        pass
                    if (rects_info[rect_no][0] == 'cls-4'):
                        pass
                    if (rects_info[rect_no][0] == 'cls-5'):
                        pass
                    if (rects_info[rect_no][0] == 'cls-6'):
                        pass

                    shapeCounter += 1

                # function test()
                js_function += '\t//' + shape[0] + '\n'

                js_function += '\tfor(i=0; i<' + str(shapeCounter) + '; i++)\n' \
                                                                     '\t{\n\t\tif(collidePointRect(mouseX, mouseY, array_' + \
                               shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + \
                               '[i].array_of_vectors[0].x, ' \
                               'array_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[i].array_of_vectors[0].y, array_' +\
                               shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[i].array_of_vectors[1].x, array_' +\
                               shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[i].array_of_vectors[1].y) == true)\n'


                js_function += '\t\t{\n\t\t\tarray_' + shape[0] + 's_' + html_filename[0:len(
                        html_filename) - 3] + '[i].color(0, 0, 0, 255);\n'  ##COLOR CAN CHANGE
                js_function += '\t\t\ttip = new Tooltip("' + shape[0] + '" + i, mouseX, mouseY, 100, 40);\n'
                js_function += '\t\t\ttip.show();\n'
                js_function += '\t\t}\n' \
                                   '\t\telse\n\t\t{\n' \
                                   '\t\t\tarray_' + shape[0] + 's_' + html_filename[
                                                                      0:len(html_filename) - 3] + '[i].color(0, 0, 0, 255);\n'
                js_function += '\t\t}\n\t}\n\n'

            # *********************************************** CIRCLE ***********************************************

            if(shape[0] == "circle"):
                shapeCounter = 0
                js_filler += '\t//' + shape[0] + '\n'

                for circle_no in range(len(circles_info)):
                    if (circles_info[circle_no][0] == 'cls-1'):
                        pass
                    if (circles_info[circle_no][0] == 'cls-2'):
                        pass
                    if (circles_info[circle_no][0] == 'cls-3'):
                        pass
                    if (circles_info[circle_no][0] == 'cls-4'):
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = '

                        js_filler += 'createVector(' + str(circles_info[circle_no][1][0]) + '*zoom' + ', ' + \
                                     str(circles_info[circle_no][1][1]) + '*zoom' + ')'


                        js_filler += ';\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[
                                                                      0:len(html_filename) - 3] + ' = new Circle(' + \
                                     shape[0] + str(shapeCounter) + ', ' + str(circles_info[circle_no][1][2]) + ', "stroke");\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[' + str(
                            circle_no) + '] = pointer_' + shape[
                                         0] + 's_' + html_filename[0:len(html_filename) - 3] + ';\n\n'

                    if (circles_info[circle_no][0] == 'cls-5'):
                        pass
                    if (circles_info[circle_no][0] == 'cls-6'):
                        pass

                    shapeCounter += 1

                # function test()
                js_function += '\t//' + shape[0] + '\n'

                js_function += '\tfor(i=0; i<' + str(shapeCounter) + '; i++)\n' \
                                                                         '\t{\n\t\tif(collidePointCircle(mouseX, mouseY, array_' + \
                                   shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + \
                                   '[i].vector_point.x, array_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[i].vector_point.y,' \
                                    ' 2 * array_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[i].radius) == true)\n'
                js_function += '\t\t{\n\t\t\tarray_' + shape[0] + 's_' + html_filename[0:len(
                        html_filename) - 3] + '[i].color(0, 0, 0, 255);\n'  ##COLOR CAN CHANGE
                js_function += '\t\t\ttip = new Tooltip("' + shape[0] + '" + i, mouseX, mouseY, 100, 40);\n'
                js_function += '\t\t\ttip.show();\n'
                js_function += '\t\t}\n' \
                                   '\t\telse\n\t\t{\n' \
                                   '\t\t\tarray_' + shape[0] + 's_' + html_filename[
                                                                      0:len(html_filename) - 3] + '[i].color(0, 0, 0, 255);\n'
                js_function += '\t\t}\n\t}\n\n'

            # *********************************************** ELLIPSE ***********************************************

            if (shape[0] == "ellipse"):
                for ellipse in ellipses_info:
                    if (ellipse[0] == 'cls-1'):
                        pass
                    if (ellipse[0] == 'cls-2'):
                        pass
                    if (ellipse[0] == 'cls-3'):
                        pass
                    if (ellipse[0] == 'cls-4'):
                        pass
                    if (ellipse[0] == 'cls-5'):
                        pass
                    if (ellipse[0] == 'cls-6'):
                        pass

            # *********************************************** LINE ***********************************************

            if (shape[0] == "line"):
                for line_no in range(len(lines_info)):
                    if (lines_info[line_no][0] == 'cls-1'):
                        pass
                    if (lines_info[line_no][0] == 'cls-2'):
                        pass
                    if (lines_info[line_no][0] == 'cls-3'):
                        pass
                    if (lines_info[line_no][0] == 'cls-4'):                 ## TO BE WRITTEN
                        pass

                    if (lines_info[line_no][0] == 'cls-5'):
                        pass
                    if (lines_info[line_no][0] == 'cls-6'):
                        pass

            # *********************************************** POLYLINE ***********************************************

            if (shape[0] == "polyline"):
                shapeCounter = 0
                js_filler += '\t//' + shape[0] + '\n'

                for polyline_no in range(len(polylines_info)):
                    if (polylines_info[polyline_no][0] == 'cls-1'):
                        pass

                    if (polylines_info[polyline_no][0] == 'cls-2'):
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(polylines_info[polyline_no][1])):
                            js_filler += 'createVector(' + str(polylines_info[polyline_no][1][coordinate][0]) + '*zoom' + ', ' + \
                                         str(polylines_info[polyline_no][1][coordinate][1]) + '*zoom' + ')'

                            if(coordinate != len(polylines_info[polyline_no][1])-1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + ' = new PolyLine('+\
                                     shape[0] + str(shapeCounter) + ');\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + '[' + str(polyline_no) + '] = pointer_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + ';\n\n'



                    if (polylines_info[polyline_no][0] == 'cls-3'):
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(polylines_info[polyline_no][1])):
                            js_filler += 'createVector(' + str(polylines_info[polyline_no][1][coordinate][0]) + '*zoom' + ', ' + \
                                         str(polylines_info[polyline_no][1][coordinate][1]) + '*zoom' + ')'

                            if (coordinate != len(polylines_info[polyline_no][1]) - 1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + ' = new PolyLine(' + \
                                     shape[0] + str(shapeCounter) + ');\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[' + str(polyline_no) + '] = pointer_' + shape[
                                         0] + 's_' + html_filename[0:len(html_filename) - 3] + ';\n\n'


                    if (polylines_info[polyline_no][0] == 'cls-4'):
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(polylines_info[polyline_no][1])):
                            js_filler += 'createVector(' + str(
                                polylines_info[polyline_no][1][coordinate][0]) + '*zoom' + ', ' + \
                                         str(polylines_info[polyline_no][1][coordinate][1]) + '*zoom' + ')'

                            if (coordinate != len(polylines_info[polyline_no][1]) - 1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[
                                                                      0:len(html_filename) - 3] + ' = new PolyLine(' + \
                                     shape[0] + str(shapeCounter) + ');\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[' + str(
                            polyline_no) + '] = pointer_' + shape[
                                         0] + 's_' + html_filename[0:len(html_filename) - 3] + ';\n\n'

                    if (polylines_info[polyline_no][0] == 'cls-5'):
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(polylines_info[polyline_no][1])):
                            js_filler += 'createVector(' + str(polylines_info[polyline_no][1][coordinate][0]) + '*zoom' + ', ' + \
                                         str(polylines_info[polyline_no][1][coordinate][1]) + '*zoom' + ')'

                            if (coordinate != len(polylines_info[polyline_no][1]) - 1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[
                                                                      0:len(html_filename) - 3] + ' = new PolyLine(' + \
                                     shape[0] + str(shapeCounter) + ');\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[' + str(
                            polyline_no) + '] = pointer_' + shape[
                                         0] + 's_' + html_filename[0:len(html_filename) - 3] + ';\n\n'

                    if (polylines_info[polyline_no][0] == 'cls-6'):
                        pass

                    shapeCounter += 1

                ##function test()
                js_function += '\t//' + shape[0] + '\n'

                js_function += '\tfor(i=0; i<' + str(shapeCounter) + '; i++)\n' \
                                '\t{\n'
                js_function += '\t\tvar j=0;\n'
                js_function += '\t\tfor(j=0; j<array_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + '[i].array_of_vectors.length - 1; j++)\n'
                js_function += '\t\t{\n\t\t\tif(collidePointLine(mouseX, mouseY, array_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] +\
                               '[i].array_of_vectors[j].x, array_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3]  + \
                               '[i].array_of_vectors[j].y, array_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] +\
                               '[i].array_of_vectors[j+1].x, array_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3]  + \
                               '[i].array_of_vectors[j+1].y, 1) == true)\n'
                js_function += '\t\t\t{\n\t\t\t\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + '[i].color(0, 0, 255, 255);\n' ##COLOR CAN CHANGE

                js_function += '\t\t\t\ttip = new Tooltip("' + shape[0] + '" + i, mouseX, mouseY, 100, 40);\n'
                js_function += '\t\t\t\ttip.show();\n'

                js_function += '\t\t\t}\n\t\t\telse\n\t\t\t{\n' \
                               '\t\t\t\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename)-3] + '[i].color(0, 0, 255, 255);\n\t\t\t}\n'  ##COLOR CAN CHANGE
                js_function += '\t\t}\n\t}\n\n'

            # *********************************************** POLYGON ***********************************************

            if (shape[0] == "polygon"):
                shapeCounter = 0
                js_filler += '\t//' + shape[0] + '\n'


                for polygon_no in range(len(polygons_info)):
                    if(polygons_info[polygon_no][0] == 'cls-1'):                ##beginStroke
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(polygons_info[polygon_no][1])):
                            js_filler += 'createVector(' + str(polygons_info[polygon_no][1][coordinate][0]) + '*zoom + alignX' + ', ' + \
                                         str(polygons_info[polygon_no][1][coordinate][1]) + '*zoom + alignY' + ')'

                            if (coordinate != len(polygons_info[polygon_no][1]) - 1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + ' = new Polygon(' + \
                                     shape[0] + str(shapeCounter) + ', "stroke", "' + PLOTID + '_' + str(polygon_no) + '");\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[' + str(polygon_no) + '] = pointer_' + shape[
                                         0] + 's_' + html_filename[0:len(html_filename) - 3] + ';\n\n'


                    if (polygons_info[polygon_no][0] == 'cls-2'):               ##beginFill
                        js_filler += '\tvar ' + shape[0] + str(shapeCounter) + ' = ['

                        for coordinate in range(0, len(polygons_info[polygon_no][1])):
                            js_filler += 'createVector(' + str(polygons_info[polygon_no][1][coordinate][0]) + '*zoom + alignX' + ', ' + \
                                         str(polygons_info[polygon_no][1][coordinate][1]) + '*zoom + alignY' + ')'

                            if (coordinate != len(polygons_info[polygon_no][1]) - 1):
                                js_filler += ', '

                        js_filler += '];\n'
                        js_filler += '\tpointer_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + ' = new Polygon(' + \
                                     shape[0] + str(shapeCounter) + ', "stroke", "' + PLOTID + '_' + str(polygon_no) + '");\n'
                        js_filler += '\tarray_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[' + str(polygon_no) + '] = pointer_' + shape[
                                         0] + 's_' + html_filename[0:len(html_filename) - 3] + ';\n\n'


                    if (polygons_info[polygon_no][0] == 'cls-3'):
                        pass
                    if (polygons_info[polygon_no][0] == 'cls-4'):
                        pass
                    if (polygons_info[polygon_no][0] == 'cls-5'):
                        pass
                    if (polygons_info[polygon_no][0] == 'cls-6'):
                        pass

                    shapeCounter += 1

                #function test()
                js_function += '\t//' + shape[0] + '\n'

                js_function += '\tfor(i=0; i<' + str(shapeCounter) + '; i++)\n' \
                                '\t{\n\t\tif(collidePointPoly(mouseX, mouseY, array_' + shape[0] +'s_' + html_filename[0:len(html_filename) - 3] + \
                               '[i].array_of_vectors) == true)\n'
                js_function += '\t\t{\n\t\t\tarray_' + shape[0] +'s_' + html_filename[0:len(html_filename) - 3] + '[i].color(244, 205, 65, 255);\n\n'    ##COLOR CAN CHANGE

                js_function += '\t\t\tfor(var j=0; j<plotInfoArray.length; j++)\n' \
                                '\t\t\t{\n\t\t\t\tif(array_' + shape[0] +'s_' + html_filename[0:len(html_filename) - 3] + \
                               '[i].plotId == plotInfoArray[j].plotId)\n'
                js_function += '\t\t\t\t{\n'
                js_function += '\t\t\t\t\tvar floorInfo = "";\n'
                js_function += '\t\t\t\t\tfor(var k=0; k<plotInfoArray[j].eachFloorUsage.length; k++)\n'
                js_function += '\t\t\t\t\t{\n'
                js_function += '\t\t\t\t\t\tfloorInfo += \'\\n\' + "Floor " + k + ": " + plotInfoArray[j].eachFloorUsage[k].floor;\n'
                js_function += '\t\t\t\t\t}\n\n'

                js_function += '\t\t\t\t\tvar plotId = plotInfoArray[j].plotId;\n' \
                               '\t\t\t\t\tvar plotUse = plotInfoArray[j].plotUse;\n' \
                               '\t\t\t\t\tvar frontWidth = plotInfoArray[j].frontWidth;\n' \
                               '\t\t\t\t\tvar buildingName = plotInfoArray[j].buildingName;\n' \
                               '\t\t\t\t\tvar officialPlotNumber = plotInfoArray[j].officialPlotNumber;\n' \
                               '\t\t\t\t\tvar yearOfBuilt = plotInfoArray[j].yearOfBuilt;\n' \
                               '\t\t\t\t\tvar numberOfFloors = plotInfoArray[j].numOfFloors;\n\n' \
                               '\t\t\t\t\tdocument.body.addEventListener("click", function(event){\n' \
                               '\t\t\t\t\t\tdocument.getElementById("span__plotID").innerHTML = plotId;\n' \
                               '\t\t\t\t\t\tdocument.getElementById("span__plotUse").innerHTML = plotUse;\n' \
                               '\t\t\t\t\t\tdocument.getElementById("span__frontWidth").innerHTML = frontWidth;\n' \
                               '\t\t\t\t\t\tdocument.getElementById("span__buildingName").innerHTML = buildingName;\n' \
                               '\t\t\t\t\t\tdocument.getElementById("span__officialPlotNumber").innerHTML = officialPlotNumber;\n' \
                               '\t\t\t\t\t\tdocument.getElementById("span__yearOfBuilt").innerHTML = yearOfBuilt;\n' \
                               '\t\t\t\t\t\tdocument.getElementById("span__numberOfFloors").innerHTML = numberOfFloors;\n' \
                               '\t\t\t\t\t\tdocument.getElementById("span__eachFloorUsage").innerHTML = floorInfo;\n' \
                               '\t\t\t\t\t});\n\n'

                js_function += '\t\t\t\t\ttip = new Tooltip("Plot ID: " + array_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[i].plotId, mouseX, mouseY, 250, 35);\n'
                js_function += '\t\t\t\t\ttip.show();\n'
                js_function += '\t\t\t\t}\n'

                js_function += '\t\t\t\telse\n'
                js_function += '\t\t\t\t{\n'
                js_function += '\t\t\t\t\ttip = new Tooltip("Plot ID: " + array_' + shape[0] + 's_' + html_filename[0:len(html_filename) - 3] + '[i].plotId, mouseX, mouseY, 250, 35);\n'
                js_function += '\t\t\t\t\ttip.show();\n'
                js_function += '\t\t\t\t}\n'

                js_function += '\t\t\t}\n'

                js_function += '\t\t}\n' \
                               '\t\telse\n\t\t{\n' \
                               '\t\t\tarray_' + shape[0] +'s_' + html_filename[0:len(html_filename) - 3] + '[i].color(244, 205, 65, 255);\n'
                js_function += '\t\t}\n\t}\n'

                js_function += '}\n\n'



    js_filler += '}\n\n'





    file = open(html_filename, "w")
    file.write(js_filler)
    file.write(js_function)


parse("../data/GKPlotProfile.svg", "plotprofile.js")