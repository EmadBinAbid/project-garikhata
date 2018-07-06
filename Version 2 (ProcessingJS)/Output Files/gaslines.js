//polygon
var array_polygons_gaslines = [];
var pointer_polygons_gaslines = null;

//polyline
var array_polylines_gaslines = [];
var pointer_polylines_gaslines = null;

//line
var array_lines_gaslines = [];
var pointer_lines_gaslines = null;



//Tooltip
var tip = null;

function gaslinesData()
{
	//polyline
	var polyline0 = [createVector(815, 805), createVector(815, 573), createVector(815, 0)];
	pointer_polylines_gaslines = new PolyLine(polyline0);
	array_polylines_gaslines[0] = pointer_polylines_gaslines;

	var polyline1 = [createVector(815, 573), createVector(805, 574), createVector(541, 593), createVector(32, 617), createVector(17, 617)];
	pointer_polylines_gaslines = new PolyLine(polyline1);
	array_polylines_gaslines[1] = pointer_polylines_gaslines;

	var polyline2 = [createVector(815, 446), createVector(521, 452), createVector(487, 452), createVector(14, 477), createVector(1, 477)];
	pointer_polylines_gaslines = new PolyLine(polyline2);
	array_polylines_gaslines[2] = pointer_polylines_gaslines;

	var polyline3 = [createVector(815, 307), createVector(521, 312), createVector(486, 307), createVector(70, 330), createVector(14, 361), createVector(1, 361)];
	pointer_polylines_gaslines = new PolyLine(polyline3);
	array_polylines_gaslines[3] = pointer_polylines_gaslines;

	var polyline4 = [createVector(521, 171), createVector(654, 163), createVector(815, 167)];
	pointer_polylines_gaslines = new PolyLine(polyline4);
	array_polylines_gaslines[4] = pointer_polylines_gaslines;

	//polygon
	var polygon0 = [createVector(521, 573), createVector(530, 573), createVector(789, 561), createVector(805, 561), createVector(805, 452), createVector(785, 452), createVector(521, 456), createVector(521, 573)];
	pointer_polygons_gaslines = new Polygon(polygon0, "stroke", "1");
	array_polygons_gaslines[0] = pointer_polygons_gaslines;

	var polygon1 = [createVector(485, 780), createVector(476, 780), createVector(24, 763), createVector(17, 763), createVector(17, 754), createVector(17, 621), createVector(29, 621), createVector(487, 604), createVector(487, 612), createVector(485, 780)];
	pointer_polygons_gaslines = new Polygon(polygon1, "stroke", "2");
	array_polygons_gaslines[1] = pointer_polygons_gaslines;

	var polygon2 = [createVector(520, 599), createVector(519, 784), createVector(531, 784), createVector(789, 805), createVector(804, 805), createVector(804, 580), createVector(785, 580), createVector(526, 599), createVector(520, 599)];
	pointer_polygons_gaslines = new Polygon(polygon2, "stroke", "3");
	array_polygons_gaslines[2] = pointer_polygons_gaslines;

	var polygon3 = [createVector(486, 579), createVector(477, 579), createVector(25, 596), createVector(17, 596), createVector(17, 484), createVector(29, 484), createVector(486, 460), createVector(486, 579)];
	pointer_polygons_gaslines = new Polygon(polygon3, "stroke", "4");
	array_polygons_gaslines[3] = pointer_polygons_gaslines;

	var polygon4 = [createVector(14, 453), createVector(29, 453), createVector(59, 455), createVector(485, 432), createVector(485, 314), createVector(476, 314), createVector(309, 322), createVector(75, 335), createVector(26, 368), createVector(14, 368), createVector(14, 453)];
	pointer_polygons_gaslines = new Polygon(polygon4, "stroke", "5");
	array_polygons_gaslines[4] = pointer_polygons_gaslines;

	var polygon5 = [createVector(802, 421), createVector(785, 421), createVector(522, 427), createVector(521, 318), createVector(530, 318), createVector(790, 312), createVector(802, 312), createVector(802, 421)];
	pointer_polygons_gaslines = new Polygon(polygon5, "stroke", "6");
	array_polygons_gaslines[5] = pointer_polygons_gaslines;

	var polygon6 = [createVector(802, 280), createVector(802, 173), createVector(783, 173), createVector(654, 171), createVector(531, 180), createVector(521, 180), createVector(521, 291), createVector(585, 291), createVector(666, 286), createVector(802, 280)];
	pointer_polygons_gaslines = new Polygon(polygon6, "stroke", "7");
	array_polygons_gaslines[6] = pointer_polygons_gaslines;

	var polygon7 = [createVector(528, 145), createVector(528, 48), createVector(589, 18), createVector(603, 15), createVector(803, 9), createVector(803, 141), createVector(611, 141), createVector(528, 145)];
	pointer_polygons_gaslines = new Polygon(polygon7, "stroke", "8");
	array_polygons_gaslines[7] = pointer_polygons_gaslines;

	var polygon8 = [createVector(496, 101), createVector(490, 286), createVector(367, 289), createVector(132, 301), createVector(129, 301), createVector(149, 280), createVector(488, 101), createVector(496, 101)];
	pointer_polygons_gaslines = new Polygon(polygon8, "stroke", "9");
	array_polygons_gaslines[8] = pointer_polygons_gaslines;

}

function gaslines(plotInfoArray)
{
	//clear();
	var i = 0;

	//polyline
	for(i=0; i<5; i++)
	{
		var j=0;
		for(j=0; j<array_polylines_gaslines[i].array_of_vectors.length - 1; j++)
		{
			if(collidePointLine(mouseX, mouseY, array_polylines_gaslines[i].array_of_vectors[j].x, array_polylines_gaslines[i].array_of_vectors[j].y, array_polylines_gaslines[i].array_of_vectors[j+1].x, array_polylines_gaslines[i].array_of_vectors[j+1].y, 1) == true)
			{
				array_polylines_gaslines[i].color(0, 0, 0, 255);
				tip = new Tooltip("polyline" + i, mouseX, mouseY, 100, 40);
				tip.show();
			}
			else
			{
				array_polylines_gaslines[i].color(255, 0, 0, 255);
			}
		}
	}

	//polygon
	for(i=0; i<9; i++)
	{
		if(collidePointPoly(mouseX, mouseY, array_polygons_gaslines[i].array_of_vectors) == true)
		{
			array_polygons_gaslines[i].color(244, 205, 65, 255);
			
			for(var j=0; j<plotInfoArray.length; j++)
			{
				if(array_polygons_gaslines[i].plotId == plotInfoArray[j].plotId)
				{
					var floorInfo = "";
					for(var k=0; k<plotInfoArray[j].eachFloorUsage.length; k++)
					{
						floorInfo += '\n' + "Floor " + k + ": " + plotInfoArray[j].eachFloorUsage[k].floor;
					}

					tip = new Tooltip("Plot Information:" + '\n' + "---------------------" + '\n' + "Plot ID: " + plotInfoArray[j].plotId + '\n' + "Plot Use: " + plotInfoArray[j].plotUse + 
						'\n' + "Front Width: " + plotInfoArray[j].frontWidth + '\n' + "Building Name: " + plotInfoArray[j].buildingName + 
						'\n' + "Official Plot Number: " + plotInfoArray[j].officialPlotNumber + '\n' + "Year of Built: " + plotInfoArray[j].yearOfBuilt + 
						'\n' + "No. of Floors: " + plotInfoArray[j].numOfFloors + '\n' + "Each Floor Usage: " + floorInfo, 
						mouseX, mouseY, 250, 500);
					tip.show();
				}
				else
				{

				}
			}
		}
		else
		{
			array_polygons_gaslines[i].color(244, 205, 65, 255);
		}
	}
}

