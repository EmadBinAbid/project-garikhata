//polygon
var array_polygons_gaslines = [];
var pointer_polygons_gaslines = null;

//polyline
var array_polylines_gaslines = [];
var pointer_polylines_gaslines = null;



//Map size
var zoom = 0.5;

//Tooltip
var tip = null;

function gaslinesData()
{
	//polyline
	var polyline0 = [createVector(815*zoom, 805*zoom), createVector(815*zoom, 573*zoom), createVector(815*zoom, 0*zoom)];
	pointer_polylines_gaslines = new PolyLine(polyline0);
	array_polylines_gaslines[0] = pointer_polylines_gaslines;

	var polyline1 = [createVector(815*zoom, 573*zoom), createVector(805*zoom, 574*zoom), createVector(541*zoom, 593*zoom), createVector(32*zoom, 617*zoom), createVector(17*zoom, 617*zoom)];
	pointer_polylines_gaslines = new PolyLine(polyline1);
	array_polylines_gaslines[1] = pointer_polylines_gaslines;

	var polyline2 = [createVector(815*zoom, 446*zoom), createVector(521*zoom, 452*zoom), createVector(487*zoom, 452*zoom), createVector(14*zoom, 477*zoom), createVector(1*zoom, 477*zoom)];
	pointer_polylines_gaslines = new PolyLine(polyline2);
	array_polylines_gaslines[2] = pointer_polylines_gaslines;

	var polyline3 = [createVector(815*zoom, 307*zoom), createVector(521*zoom, 312*zoom), createVector(486*zoom, 307*zoom), createVector(70*zoom, 330*zoom), createVector(14*zoom, 361*zoom), createVector(1*zoom, 361*zoom)];
	pointer_polylines_gaslines = new PolyLine(polyline3);
	array_polylines_gaslines[3] = pointer_polylines_gaslines;

	var polyline4 = [createVector(521*zoom, 171*zoom), createVector(654*zoom, 163*zoom), createVector(815*zoom, 167*zoom)];
	pointer_polylines_gaslines = new PolyLine(polyline4);
	array_polylines_gaslines[4] = pointer_polylines_gaslines;

	var polyline5 = [createVector(1*zoom, 477*zoom), createVector(1*zoom, 349*zoom)];
	pointer_polylines_gaslines = new PolyLine(polyline5);
	array_polylines_gaslines[5] = pointer_polylines_gaslines;

	//polygon
	var polygon0 = [createVector(521*zoom + alignX, 573*zoom + alignY), createVector(530*zoom + alignX, 573*zoom + alignY), createVector(789*zoom + alignX, 561*zoom + alignY), createVector(805*zoom + alignX, 561*zoom + alignY), createVector(805*zoom + alignX, 452*zoom + alignY), createVector(785*zoom + alignX, 452*zoom + alignY), createVector(521*zoom + alignX, 456*zoom + alignY), createVector(521*zoom + alignX, 573*zoom + alignY)];
	pointer_polygons_gaslines = new Polygon(polygon0, "stroke");
	array_polygons_gaslines[0] = pointer_polygons_gaslines;

	var polygon1 = [createVector(485*zoom + alignX, 780*zoom + alignY), createVector(476*zoom + alignX, 780*zoom + alignY), createVector(24*zoom + alignX, 763*zoom + alignY), createVector(17*zoom + alignX, 763*zoom + alignY), createVector(17*zoom + alignX, 754*zoom + alignY), createVector(17*zoom + alignX, 621*zoom + alignY), createVector(29*zoom + alignX, 621*zoom + alignY), createVector(487*zoom + alignX, 604*zoom + alignY), createVector(487*zoom + alignX, 612*zoom + alignY), createVector(485*zoom + alignX, 780*zoom + alignY)];
	pointer_polygons_gaslines = new Polygon(polygon1, "stroke");
	array_polygons_gaslines[1] = pointer_polygons_gaslines;

	var polygon2 = [createVector(520*zoom + alignX, 599*zoom + alignY), createVector(519*zoom + alignX, 784*zoom + alignY), createVector(531*zoom + alignX, 784*zoom + alignY), createVector(789*zoom + alignX, 805*zoom + alignY), createVector(804*zoom + alignX, 805*zoom + alignY), createVector(804*zoom + alignX, 580*zoom + alignY), createVector(785*zoom + alignX, 580*zoom + alignY), createVector(526*zoom + alignX, 599*zoom + alignY), createVector(520*zoom + alignX, 599*zoom + alignY)];
	pointer_polygons_gaslines = new Polygon(polygon2, "stroke");
	array_polygons_gaslines[2] = pointer_polygons_gaslines;

	var polygon3 = [createVector(486*zoom + alignX, 579*zoom + alignY), createVector(477*zoom + alignX, 579*zoom + alignY), createVector(25*zoom + alignX, 596*zoom + alignY), createVector(17*zoom + alignX, 596*zoom + alignY), createVector(17*zoom + alignX, 484*zoom + alignY), createVector(29*zoom + alignX, 484*zoom + alignY), createVector(486*zoom + alignX, 460*zoom + alignY), createVector(486*zoom + alignX, 579*zoom + alignY)];
	pointer_polygons_gaslines = new Polygon(polygon3, "stroke");
	array_polygons_gaslines[3] = pointer_polygons_gaslines;

	var polygon4 = [createVector(14*zoom + alignX, 453*zoom + alignY), createVector(29*zoom + alignX, 453*zoom + alignY), createVector(59*zoom + alignX, 455*zoom + alignY), createVector(485*zoom + alignX, 432*zoom + alignY), createVector(485*zoom + alignX, 314*zoom + alignY), createVector(476*zoom + alignX, 314*zoom + alignY), createVector(309*zoom + alignX, 322*zoom + alignY), createVector(75*zoom + alignX, 335*zoom + alignY), createVector(26*zoom + alignX, 368*zoom + alignY), createVector(14*zoom + alignX, 368*zoom + alignY), createVector(14*zoom + alignX, 453*zoom + alignY)];
	pointer_polygons_gaslines = new Polygon(polygon4, "stroke");
	array_polygons_gaslines[4] = pointer_polygons_gaslines;

	var polygon5 = [createVector(802*zoom + alignX, 421*zoom + alignY), createVector(785*zoom + alignX, 421*zoom + alignY), createVector(522*zoom + alignX, 427*zoom + alignY), createVector(521*zoom + alignX, 318*zoom + alignY), createVector(530*zoom + alignX, 318*zoom + alignY), createVector(790*zoom + alignX, 312*zoom + alignY), createVector(802*zoom + alignX, 312*zoom + alignY), createVector(802*zoom + alignX, 421*zoom + alignY)];
	pointer_polygons_gaslines = new Polygon(polygon5, "stroke");
	array_polygons_gaslines[5] = pointer_polygons_gaslines;

	var polygon6 = [createVector(802*zoom + alignX, 280*zoom + alignY), createVector(802*zoom + alignX, 173*zoom + alignY), createVector(783*zoom + alignX, 173*zoom + alignY), createVector(654*zoom + alignX, 171*zoom + alignY), createVector(531*zoom + alignX, 180*zoom + alignY), createVector(521*zoom + alignX, 180*zoom + alignY), createVector(521*zoom + alignX, 291*zoom + alignY), createVector(585*zoom + alignX, 291*zoom + alignY), createVector(666*zoom + alignX, 286*zoom + alignY), createVector(802*zoom + alignX, 280*zoom + alignY)];
	pointer_polygons_gaslines = new Polygon(polygon6, "stroke");
	array_polygons_gaslines[6] = pointer_polygons_gaslines;

	var polygon7 = [createVector(528*zoom + alignX, 145*zoom + alignY), createVector(528*zoom + alignX, 48*zoom + alignY), createVector(589*zoom + alignX, 18*zoom + alignY), createVector(603*zoom + alignX, 15*zoom + alignY), createVector(803*zoom + alignX, 9*zoom + alignY), createVector(803*zoom + alignX, 141*zoom + alignY), createVector(611*zoom + alignX, 141*zoom + alignY), createVector(528*zoom + alignX, 145*zoom + alignY)];
	pointer_polygons_gaslines = new Polygon(polygon7, "stroke");
	array_polygons_gaslines[7] = pointer_polygons_gaslines;

	var polygon8 = [createVector(496*zoom + alignX, 101*zoom + alignY), createVector(490*zoom + alignX, 286*zoom + alignY), createVector(367*zoom + alignX, 289*zoom + alignY), createVector(132*zoom + alignX, 301*zoom + alignY), createVector(129*zoom + alignX, 301*zoom + alignY), createVector(149*zoom + alignX, 280*zoom + alignY), createVector(488*zoom + alignX, 101*zoom + alignY), createVector(496*zoom + alignX, 101*zoom + alignY)];
	pointer_polygons_gaslines = new Polygon(polygon8, "stroke");
	array_polygons_gaslines[8] = pointer_polygons_gaslines;

}

function gaslines(plotInfoArray)
{
	//clear();
	var i = 0;

	//polyline
	for(i=0; i<6; i++)
	{
		var j=0;
		for(j=0; j<array_polylines_gaslines[i].array_of_vectors.length - 1; j++)
		{
			if(collidePointLine(mouseX, mouseY, array_polylines_gaslines[i].array_of_vectors[j].x, array_polylines_gaslines[i].array_of_vectors[j].y, array_polylines_gaslines[i].array_of_vectors[j+1].x, array_polylines_gaslines[i].array_of_vectors[j+1].y, 1) == true)
			{
				array_polylines_gaslines[i].color(0, 0, 255, 255);
				tip = new Tooltip("polyline" + i, mouseX, mouseY, 100, 40);
				tip.show();
			}
			else
			{
				array_polylines_gaslines[i].color(0, 0, 255, 255);
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
			array_polygons_gaslines[i].color(244, 205, 65, 255);
		}
	}
}

