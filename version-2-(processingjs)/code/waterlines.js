//polygon
var array_polygons_waterlines = [];
var pointer_polygons_waterlines = null;

//polyline
var array_polylines_waterlines = [];
var pointer_polylines_waterlines = null;



//Map size
var zoom = 0.5;

//Tooltip
var tip = null;

function waterlinesData()
{
	//polyline
	var polyline0 = [createVector(814*zoom, 805*zoom), createVector(814*zoom, 573*zoom), createVector(814*zoom, 0*zoom)];
	pointer_polylines_waterlines = new PolyLine(polyline0);
	array_polylines_waterlines[0] = pointer_polylines_waterlines;

	var polyline1 = [createVector(814*zoom, 573*zoom), createVector(804*zoom, 574*zoom), createVector(539*zoom, 593*zoom), createVector(30*zoom, 617*zoom), createVector(15*zoom, 617*zoom)];
	pointer_polylines_waterlines = new PolyLine(polyline1);
	array_polylines_waterlines[1] = pointer_polylines_waterlines;

	var polyline2 = [createVector(814*zoom, 446*zoom), createVector(520*zoom, 452*zoom), createVector(485*zoom, 452*zoom), createVector(12*zoom, 477*zoom), createVector(0*zoom, 477*zoom)];
	pointer_polylines_waterlines = new PolyLine(polyline2);
	array_polylines_waterlines[2] = pointer_polylines_waterlines;

	var polyline3 = [createVector(520*zoom, 155*zoom), createVector(652*zoom, 147*zoom), createVector(814*zoom, 151*zoom)];
	pointer_polylines_waterlines = new PolyLine(polyline3);
	array_polylines_waterlines[3] = pointer_polylines_waterlines;

	var polyline4 = [createVector(73*zoom, 327*zoom), createVector(488*zoom, 305*zoom), createVector(520*zoom, 310*zoom), createVector(814*zoom, 305*zoom)];
	pointer_polylines_waterlines = new PolyLine(polyline4);
	array_polylines_waterlines[4] = pointer_polylines_waterlines;

	//polygon
	var polygon0 = [createVector(520*zoom, 573*zoom), createVector(529*zoom, 573*zoom), createVector(787*zoom, 561*zoom), createVector(804*zoom, 561*zoom), createVector(804*zoom, 452*zoom), createVector(784*zoom, 452*zoom), createVector(520*zoom, 456*zoom), createVector(520*zoom, 573*zoom)];
	pointer_polygons_waterlines = new Polygon(polygon0, "stroke");
	array_polygons_waterlines[0] = pointer_polygons_waterlines;

	var polygon1 = [createVector(483*zoom, 780*zoom), createVector(475*zoom, 780*zoom), createVector(23*zoom, 763*zoom), createVector(15*zoom, 763*zoom), createVector(15*zoom, 754*zoom), createVector(15*zoom, 621*zoom), createVector(28*zoom, 621*zoom), createVector(485*zoom, 604*zoom), createVector(485*zoom, 612*zoom), createVector(483*zoom, 780*zoom)];
	pointer_polygons_waterlines = new Polygon(polygon1, "stroke");
	array_polygons_waterlines[1] = pointer_polygons_waterlines;

	var polygon2 = [createVector(518*zoom, 599*zoom), createVector(517*zoom, 784*zoom), createVector(530*zoom, 784*zoom), createVector(787*zoom, 805*zoom), createVector(803*zoom, 805*zoom), createVector(803*zoom, 580*zoom), createVector(784*zoom, 580*zoom), createVector(525*zoom, 599*zoom), createVector(518*zoom, 599*zoom)];
	pointer_polygons_waterlines = new Polygon(polygon2, "stroke");
	array_polygons_waterlines[2] = pointer_polygons_waterlines;

	var polygon3 = [createVector(484*zoom, 579*zoom), createVector(475*zoom, 579*zoom), createVector(24*zoom, 596*zoom), createVector(15*zoom, 596*zoom), createVector(15*zoom, 484*zoom), createVector(27*zoom, 484*zoom), createVector(484*zoom, 460*zoom), createVector(484*zoom, 579*zoom)];
	pointer_polygons_waterlines = new Polygon(polygon3, "stroke");
	array_polygons_waterlines[3] = pointer_polygons_waterlines;

	var polygon4 = [createVector(12*zoom, 453*zoom), createVector(27*zoom, 453*zoom), createVector(57*zoom, 455*zoom), createVector(484*zoom, 432*zoom), createVector(484*zoom, 314*zoom), createVector(475*zoom, 314*zoom), createVector(308*zoom, 322*zoom), createVector(73*zoom, 335*zoom), createVector(24*zoom, 368*zoom), createVector(12*zoom, 368*zoom), createVector(12*zoom, 453*zoom)];
	pointer_polygons_waterlines = new Polygon(polygon4, "stroke");
	array_polygons_waterlines[4] = pointer_polygons_waterlines;

	var polygon5 = [createVector(801*zoom, 421*zoom), createVector(783*zoom, 421*zoom), createVector(520*zoom, 427*zoom), createVector(520*zoom, 318*zoom), createVector(529*zoom, 318*zoom), createVector(788*zoom, 312*zoom), createVector(801*zoom, 312*zoom), createVector(801*zoom, 421*zoom)];
	pointer_polygons_waterlines = new Polygon(polygon5, "stroke");
	array_polygons_waterlines[5] = pointer_polygons_waterlines;

	var polygon6 = [createVector(801*zoom, 280*zoom), createVector(801*zoom, 173*zoom), createVector(782*zoom, 173*zoom), createVector(652*zoom, 171*zoom), createVector(529*zoom, 180*zoom), createVector(520*zoom, 180*zoom), createVector(520*zoom, 291*zoom), createVector(584*zoom, 291*zoom), createVector(665*zoom, 286*zoom), createVector(801*zoom, 280*zoom)];
	pointer_polygons_waterlines = new Polygon(polygon6, "stroke");
	array_polygons_waterlines[6] = pointer_polygons_waterlines;

	var polygon7 = [createVector(527*zoom, 145*zoom), createVector(526*zoom, 48*zoom), createVector(588*zoom, 18*zoom), createVector(602*zoom, 15*zoom), createVector(801*zoom, 9*zoom), createVector(801*zoom, 141*zoom), createVector(610*zoom, 141*zoom), createVector(527*zoom, 145*zoom)];
	pointer_polygons_waterlines = new Polygon(polygon7, "stroke");
	array_polygons_waterlines[7] = pointer_polygons_waterlines;

	var polygon8 = [createVector(494*zoom, 101*zoom), createVector(488*zoom, 286*zoom), createVector(365*zoom, 289*zoom), createVector(131*zoom, 301*zoom), createVector(127*zoom, 301*zoom), createVector(147*zoom, 280*zoom), createVector(487*zoom, 101*zoom), createVector(494*zoom, 101*zoom)];
	pointer_polygons_waterlines = new Polygon(polygon8, "stroke");
	array_polygons_waterlines[8] = pointer_polygons_waterlines;

}

function waterlines(plotInfoArray)
{
	//clear();
	var i = 0;

	//polyline
	for(i=0; i<5; i++)
	{
		var j=0;
		for(j=0; j<array_polylines_waterlines[i].array_of_vectors.length - 1; j++)
		{
			if(collidePointLine(mouseX, mouseY, array_polylines_waterlines[i].array_of_vectors[j].x, array_polylines_waterlines[i].array_of_vectors[j].y, array_polylines_waterlines[i].array_of_vectors[j+1].x, array_polylines_waterlines[i].array_of_vectors[j+1].y, 1) == true)
			{
				array_polylines_waterlines[i].color(0, 0, 255, 255);
				tip = new Tooltip("polyline" + i, mouseX, mouseY, 100, 40);
				tip.show();
			}
			else
			{
				array_polylines_waterlines[i].color(0, 0, 255, 255);
			}
		}
	}

	//polygon
	for(i=0; i<9; i++)
	{
		if(collidePointPoly(mouseX, mouseY, array_polygons_waterlines[i].array_of_vectors) == true)
		{
			array_polygons_waterlines[i].color(244, 205, 65, 255);

			for(var j=0; j<plotInfoArray.length; j++)
			{
				if(array_polygons_waterlines[i].plotId == plotInfoArray[j].plotId)
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
						mouseX, mouseY, 250, 300);
					tip.show();
				}
				else
				{
				}
			}
		}
		else
		{
			array_polygons_waterlines[i].color(244, 205, 65, 255);
		}
	}
}

