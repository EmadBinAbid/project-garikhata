//polygon
var array_polygons_sewagelines = [];
var pointer_polygons_sewagelines = null;

//polyline
var array_polylines_sewagelines = [];
var pointer_polylines_sewagelines = null;

//circle
var array_circles_sewagelines = [];
var pointer_circles_sewagelines = null;



//Map size
var zoom = 0.5;

//Tooltip
var tip = null;

function sewagelinesData()
{
	//circle
	var circle0 = createVector(790*zoom, 149*zoom);
	pointer_circles_sewagelines = new Circle(circle0, 3, "stroke");
	array_circles_sewagelines[0] = pointer_circles_sewagelines;

	var circle1 = createVector(725*zoom, 149*zoom);
	pointer_circles_sewagelines = new Circle(circle1, 3, "stroke");
	array_circles_sewagelines[1] = pointer_circles_sewagelines;

	var circle2 = createVector(675*zoom, 148*zoom);
	pointer_circles_sewagelines = new Circle(circle2, 3, "stroke");
	array_circles_sewagelines[2] = pointer_circles_sewagelines;

	var circle3 = createVector(641*zoom, 147*zoom);
	pointer_circles_sewagelines = new Circle(circle3, 3, "stroke");
	array_circles_sewagelines[3] = pointer_circles_sewagelines;

	var circle4 = createVector(557*zoom, 151*zoom);
	pointer_circles_sewagelines = new Circle(circle4, 3, "stroke");
	array_circles_sewagelines[4] = pointer_circles_sewagelines;

	var circle5 = createVector(515*zoom, 154*zoom);
	pointer_circles_sewagelines = new Circle(circle5, 3, "stroke");
	array_circles_sewagelines[5] = pointer_circles_sewagelines;

	var circle6 = createVector(496*zoom, 102*zoom);
	pointer_circles_sewagelines = new Circle(circle6, 3, "stroke");
	array_circles_sewagelines[6] = pointer_circles_sewagelines;

	var circle7 = createVector(495*zoom, 141*zoom);
	pointer_circles_sewagelines = new Circle(circle7, 3, "stroke");
	array_circles_sewagelines[7] = pointer_circles_sewagelines;

	var circle8 = createVector(494*zoom, 156*zoom);
	pointer_circles_sewagelines = new Circle(circle8, 3, "stroke");
	array_circles_sewagelines[8] = pointer_circles_sewagelines;

	var circle9 = createVector(493*zoom, 180*zoom);
	pointer_circles_sewagelines = new Circle(circle9, 3, "stroke");
	array_circles_sewagelines[9] = pointer_circles_sewagelines;

	var circle10 = createVector(490*zoom, 238*zoom);
	pointer_circles_sewagelines = new Circle(circle10, 3, "stroke");
	array_circles_sewagelines[10] = pointer_circles_sewagelines;

	var circle11 = createVector(488*zoom, 301*zoom);
	pointer_circles_sewagelines = new Circle(circle11, 3, "stroke");
	array_circles_sewagelines[11] = pointer_circles_sewagelines;

	var circle12 = createVector(526*zoom, 296*zoom);
	pointer_circles_sewagelines = new Circle(circle12, 3, "stroke");
	array_circles_sewagelines[12] = pointer_circles_sewagelines;

	var circle13 = createVector(611*zoom, 294*zoom);
	pointer_circles_sewagelines = new Circle(circle13, 3, "stroke");
	array_circles_sewagelines[13] = pointer_circles_sewagelines;

	var circle14 = createVector(591*zoom, 296*zoom);
	pointer_circles_sewagelines = new Circle(circle14, 3, "stroke");
	array_circles_sewagelines[14] = pointer_circles_sewagelines;

	var circle15 = createVector(678*zoom, 291*zoom);
	pointer_circles_sewagelines = new Circle(circle15, 3, "stroke");
	array_circles_sewagelines[15] = pointer_circles_sewagelines;

	var circle16 = createVector(753*zoom, 288*zoom);
	pointer_circles_sewagelines = new Circle(circle16, 3, "stroke");
	array_circles_sewagelines[16] = pointer_circles_sewagelines;

	var circle17 = createVector(789*zoom, 286*zoom);
	pointer_circles_sewagelines = new Circle(circle17, 3, "stroke");
	array_circles_sewagelines[17] = pointer_circles_sewagelines;

	var circle18 = createVector(393*zoom, 294*zoom);
	pointer_circles_sewagelines = new Circle(circle18, 3, "stroke");
	array_circles_sewagelines[18] = pointer_circles_sewagelines;

	var circle19 = createVector(343*zoom, 297*zoom);
	pointer_circles_sewagelines = new Circle(circle19, 3, "stroke");
	array_circles_sewagelines[19] = pointer_circles_sewagelines;

	var circle20 = createVector(263*zoom, 300*zoom);
	pointer_circles_sewagelines = new Circle(circle20, 3, "stroke");
	array_circles_sewagelines[20] = pointer_circles_sewagelines;

	var circle21 = createVector(180*zoom, 304*zoom);
	pointer_circles_sewagelines = new Circle(circle21, 3, "stroke");
	array_circles_sewagelines[21] = pointer_circles_sewagelines;

	var circle22 = createVector(90*zoom, 306*zoom);
	pointer_circles_sewagelines = new Circle(circle22, 3, "stroke");
	array_circles_sewagelines[22] = pointer_circles_sewagelines;

	var circle23 = createVector(791*zoom, 446*zoom);
	pointer_circles_sewagelines = new Circle(circle23, 3, "stroke");
	array_circles_sewagelines[23] = pointer_circles_sewagelines;

	var circle24 = createVector(732*zoom, 446*zoom);
	pointer_circles_sewagelines = new Circle(circle24, 3, "stroke");
	array_circles_sewagelines[24] = pointer_circles_sewagelines;

	var circle25 = createVector(661*zoom, 448*zoom);
	pointer_circles_sewagelines = new Circle(circle25, 3, "stroke");
	array_circles_sewagelines[25] = pointer_circles_sewagelines;

	var circle26 = createVector(621*zoom, 448*zoom);
	pointer_circles_sewagelines = new Circle(circle26, 3, "stroke");
	array_circles_sewagelines[26] = pointer_circles_sewagelines;

	var circle27 = createVector(569*zoom, 448*zoom);
	pointer_circles_sewagelines = new Circle(circle27, 3, "stroke");
	array_circles_sewagelines[27] = pointer_circles_sewagelines;

	var circle28 = createVector(508*zoom, 448*zoom);
	pointer_circles_sewagelines = new Circle(circle28, 3, "stroke");
	array_circles_sewagelines[28] = pointer_circles_sewagelines;

	var circle29 = createVector(488*zoom, 444*zoom);
	pointer_circles_sewagelines = new Circle(circle29, 3, "stroke");
	array_circles_sewagelines[29] = pointer_circles_sewagelines;

	var circle30 = createVector(489*zoom, 375*zoom);
	pointer_circles_sewagelines = new Circle(circle30, 3, "stroke");
	array_circles_sewagelines[30] = pointer_circles_sewagelines;

	var circle31 = createVector(472*zoom, 455*zoom);
	pointer_circles_sewagelines = new Circle(circle31, 3, "stroke");
	array_circles_sewagelines[31] = pointer_circles_sewagelines;

	var circle32 = createVector(414*zoom, 457*zoom);
	pointer_circles_sewagelines = new Circle(circle32, 3, "stroke");
	array_circles_sewagelines[32] = pointer_circles_sewagelines;

	var circle33 = createVector(367*zoom, 460*zoom);
	pointer_circles_sewagelines = new Circle(circle33, 3, "stroke");
	array_circles_sewagelines[33] = pointer_circles_sewagelines;

	var circle34 = createVector(325*zoom, 462*zoom);
	pointer_circles_sewagelines = new Circle(circle34, 3, "stroke");
	array_circles_sewagelines[34] = pointer_circles_sewagelines;

	var circle35 = createVector(262*zoom, 466*zoom);
	pointer_circles_sewagelines = new Circle(circle35, 3, "stroke");
	array_circles_sewagelines[35] = pointer_circles_sewagelines;

	var circle36 = createVector(169*zoom, 471*zoom);
	pointer_circles_sewagelines = new Circle(circle36, 3, "stroke");
	array_circles_sewagelines[36] = pointer_circles_sewagelines;

	var circle37 = createVector(120*zoom, 474*zoom);
	pointer_circles_sewagelines = new Circle(circle37, 3, "stroke");
	array_circles_sewagelines[37] = pointer_circles_sewagelines;

	var circle38 = createVector(101*zoom, 459*zoom);
	pointer_circles_sewagelines = new Circle(circle38, 3, "stroke");
	array_circles_sewagelines[38] = pointer_circles_sewagelines;

	var circle39 = createVector(46*zoom, 462*zoom);
	pointer_circles_sewagelines = new Circle(circle39, 3, "stroke");
	array_circles_sewagelines[39] = pointer_circles_sewagelines;

	var circle40 = createVector(728*zoom, 577*zoom);
	pointer_circles_sewagelines = new Circle(circle40, 3, "stroke");
	array_circles_sewagelines[40] = pointer_circles_sewagelines;

	var circle41 = createVector(685*zoom, 581*zoom);
	pointer_circles_sewagelines = new Circle(circle41, 3, "stroke");
	array_circles_sewagelines[41] = pointer_circles_sewagelines;

	var circle42 = createVector(567*zoom, 588*zoom);
	pointer_circles_sewagelines = new Circle(circle42, 3, "stroke");
	array_circles_sewagelines[42] = pointer_circles_sewagelines;

	var circle43 = createVector(489*zoom, 588*zoom);
	pointer_circles_sewagelines = new Circle(circle43, 3, "stroke");
	array_circles_sewagelines[43] = pointer_circles_sewagelines;

	var circle44 = createVector(489*zoom, 527*zoom);
	pointer_circles_sewagelines = new Circle(circle44, 3, "stroke");
	array_circles_sewagelines[44] = pointer_circles_sewagelines;

	var circle45 = createVector(472*zoom, 598*zoom);
	pointer_circles_sewagelines = new Circle(circle45, 3, "stroke");
	array_circles_sewagelines[45] = pointer_circles_sewagelines;

	var circle46 = createVector(415*zoom, 602*zoom);
	pointer_circles_sewagelines = new Circle(circle46, 3, "stroke");
	array_circles_sewagelines[46] = pointer_circles_sewagelines;

	var circle47 = createVector(367*zoom, 604*zoom);
	pointer_circles_sewagelines = new Circle(circle47, 3, "stroke");
	array_circles_sewagelines[47] = pointer_circles_sewagelines;

	var circle48 = createVector(338*zoom, 588*zoom);
	pointer_circles_sewagelines = new Circle(circle48, 3, "stroke");
	array_circles_sewagelines[48] = pointer_circles_sewagelines;

	var circle49 = createVector(308*zoom, 605*zoom);
	pointer_circles_sewagelines = new Circle(circle49, 3, "stroke");
	array_circles_sewagelines[49] = pointer_circles_sewagelines;

	var circle50 = createVector(252*zoom, 605*zoom);
	pointer_circles_sewagelines = new Circle(circle50, 3, "stroke");
	array_circles_sewagelines[50] = pointer_circles_sewagelines;

	var circle51 = createVector(213*zoom, 594*zoom);
	pointer_circles_sewagelines = new Circle(circle51, 3, "stroke");
	array_circles_sewagelines[51] = pointer_circles_sewagelines;

	var circle52 = createVector(90*zoom, 605*zoom);
	pointer_circles_sewagelines = new Circle(circle52, 3, "stroke");
	array_circles_sewagelines[52] = pointer_circles_sewagelines;

	var circle53 = createVector(3*zoom, 609*zoom);
	pointer_circles_sewagelines = new Circle(circle53, 3, "stroke");
	array_circles_sewagelines[53] = pointer_circles_sewagelines;

	var circle54 = createVector(489*zoom, 749*zoom);
	pointer_circles_sewagelines = new Circle(circle54, 3, "stroke");
	array_circles_sewagelines[54] = pointer_circles_sewagelines;

	//polyline
	var polyline0 = [createVector(802*zoom, 149*zoom), createVector(641*zoom, 147*zoom), createVector(599*zoom, 147*zoom), createVector(494*zoom, 156*zoom)];
	pointer_polylines_sewagelines = new PolyLine(polyline0);
	array_polylines_sewagelines[0] = pointer_polylines_sewagelines;

	var polyline1 = [createVector(802*zoom, 805*zoom), createVector(802*zoom, 573*zoom), createVector(802*zoom, 0*zoom)];
	pointer_polylines_sewagelines = new PolyLine(polyline1);
	array_polylines_sewagelines[1] = pointer_polylines_sewagelines;

	var polyline2 = [createVector(489*zoom, 750*zoom), createVector(489*zoom, 285*zoom), createVector(496*zoom, 101*zoom)];
	pointer_polylines_sewagelines = new PolyLine(polyline2);
	array_polylines_sewagelines[2] = pointer_polylines_sewagelines;

	var polyline3 = [createVector(90*zoom, 306*zoom), createVector(393*zoom, 295*zoom), createVector(489*zoom, 301*zoom), createVector(538*zoom, 295*zoom), createVector(580*zoom, 295*zoom), createVector(802*zoom, 285*zoom)];
	pointer_polylines_sewagelines = new PolyLine(polyline3);
	array_polylines_sewagelines[3] = pointer_polylines_sewagelines;

	var polyline4 = [createVector(1*zoom, 459*zoom), createVector(46*zoom, 462*zoom), createVector(101*zoom, 459*zoom), createVector(119*zoom, 474*zoom), createVector(473*zoom, 455*zoom), createVector(489*zoom, 443*zoom), createVector(508*zoom, 449*zoom), createVector(802*zoom, 447*zoom)];
	pointer_polylines_sewagelines = new PolyLine(polyline4);
	array_polylines_sewagelines[4] = pointer_polylines_sewagelines;

	var polyline5 = [createVector(3*zoom, 609*zoom), createVector(142*zoom, 604*zoom), createVector(213*zoom, 593*zoom), createVector(250*zoom, 605*zoom), createVector(308*zoom, 605*zoom), createVector(338*zoom, 588*zoom), createVector(367*zoom, 604*zoom), createVector(473*zoom, 598*zoom), createVector(489*zoom, 588*zoom), createVector(508*zoom, 593*zoom), createVector(611*zoom, 586*zoom), createVector(769*zoom, 575*zoom), createVector(802*zoom, 573*zoom)];
	pointer_polylines_sewagelines = new PolyLine(polyline5);
	array_polylines_sewagelines[5] = pointer_polylines_sewagelines;

	//polygon
	var polygon0 = [createVector(508*zoom, 573*zoom), createVector(517*zoom, 573*zoom), createVector(776*zoom, 561*zoom), createVector(792*zoom, 561*zoom), createVector(792*zoom, 452*zoom), createVector(772*zoom, 452*zoom), createVector(508*zoom, 456*zoom), createVector(508*zoom, 573*zoom)];
	pointer_polygons_sewagelines = new Polygon(polygon0, "stroke");
	array_polygons_sewagelines[0] = pointer_polygons_sewagelines;

	var polygon1 = [createVector(472*zoom, 780*zoom), createVector(463*zoom, 780*zoom), createVector(11*zoom, 763*zoom), createVector(3*zoom, 763*zoom), createVector(3*zoom, 754*zoom), createVector(4*zoom, 621*zoom), createVector(16*zoom, 621*zoom), createVector(473*zoom, 604*zoom), createVector(473*zoom, 612*zoom), createVector(472*zoom, 780*zoom)];
	pointer_polygons_sewagelines = new Polygon(polygon1, "stroke");
	array_polygons_sewagelines[1] = pointer_polygons_sewagelines;

	var polygon2 = [createVector(507*zoom, 599*zoom), createVector(506*zoom, 784*zoom), createVector(518*zoom, 784*zoom), createVector(776*zoom, 805*zoom), createVector(791*zoom, 805*zoom), createVector(791*zoom, 580*zoom), createVector(772*zoom, 580*zoom), createVector(513*zoom, 599*zoom), createVector(507*zoom, 599*zoom)];
	pointer_polygons_sewagelines = new Polygon(polygon2, "stroke");
	array_polygons_sewagelines[2] = pointer_polygons_sewagelines;

	var polygon3 = [createVector(472*zoom, 579*zoom), createVector(464*zoom, 579*zoom), createVector(12*zoom, 596*zoom), createVector(4*zoom, 596*zoom), createVector(3*zoom, 484*zoom), createVector(15*zoom, 484*zoom), createVector(472*zoom, 460*zoom), createVector(472*zoom, 579*zoom)];
	pointer_polygons_sewagelines = new Polygon(polygon3, "stroke");
	array_polygons_sewagelines[3] = pointer_polygons_sewagelines;

	var polygon4 = [createVector(1*zoom, 453*zoom), createVector(16*zoom, 453*zoom), createVector(46*zoom, 455*zoom), createVector(472*zoom, 432*zoom), createVector(472*zoom, 314*zoom), createVector(463*zoom, 314*zoom), createVector(296*zoom, 322*zoom), createVector(62*zoom, 335*zoom), createVector(13*zoom, 368*zoom), createVector(1*zoom, 368*zoom), createVector(1*zoom, 453*zoom)];
	pointer_polygons_sewagelines = new Polygon(polygon4, "stroke");
	array_polygons_sewagelines[4] = pointer_polygons_sewagelines;

	var polygon5 = [createVector(789*zoom, 421*zoom), createVector(772*zoom, 421*zoom), createVector(508*zoom, 427*zoom), createVector(508*zoom, 318*zoom), createVector(517*zoom, 318*zoom), createVector(777*zoom, 312*zoom), createVector(789*zoom, 312*zoom), createVector(789*zoom, 421*zoom)];
	pointer_polygons_sewagelines = new Polygon(polygon5, "stroke");
	array_polygons_sewagelines[5] = pointer_polygons_sewagelines;

	var polygon6 = [createVector(789*zoom, 280*zoom), createVector(789*zoom, 173*zoom), createVector(770*zoom, 173*zoom), createVector(641*zoom, 171*zoom), createVector(518*zoom, 180*zoom), createVector(508*zoom, 180*zoom), createVector(508*zoom, 291*zoom), createVector(572*zoom, 291*zoom), createVector(653*zoom, 286*zoom), createVector(789*zoom, 280*zoom)];
	pointer_polygons_sewagelines = new Polygon(polygon6, "stroke");
	array_polygons_sewagelines[6] = pointer_polygons_sewagelines;

	var polygon7 = [createVector(515*zoom, 145*zoom), createVector(515*zoom, 48*zoom), createVector(576*zoom, 18*zoom), createVector(590*zoom, 15*zoom), createVector(790*zoom, 9*zoom), createVector(790*zoom, 141*zoom), createVector(598*zoom, 141*zoom), createVector(515*zoom, 145*zoom)];
	pointer_polygons_sewagelines = new Polygon(polygon7, "stroke");
	array_polygons_sewagelines[7] = pointer_polygons_sewagelines;

	var polygon8 = [createVector(482*zoom, 101*zoom), createVector(477*zoom, 286*zoom), createVector(353*zoom, 289*zoom), createVector(119*zoom, 301*zoom), createVector(116*zoom, 301*zoom), createVector(136*zoom, 280*zoom), createVector(475*zoom, 101*zoom), createVector(482*zoom, 101*zoom)];
	pointer_polygons_sewagelines = new Polygon(polygon8, "stroke");
	array_polygons_sewagelines[8] = pointer_polygons_sewagelines;

}

function sewagelines(plotInfoArray)
{
	//clear();
	var i = 0;

	//circle
	for(i=0; i<55; i++)
	{
		if(collidePointCircle(mouseX, mouseY, array_circles_sewagelines[i].vector_point.x, array_circles_sewagelines[i].vector_point.y, 2 * array_circles_sewagelines[i].radius) == true)
		{
			array_circles_sewagelines[i].color(0, 0, 0, 255);
			tip = new Tooltip("circle" + i, mouseX, mouseY, 100, 40);
			tip.show();
		}
		else
		{
			array_circles_sewagelines[i].color(0, 0, 0, 255);
		}
	}

	//polyline
	for(i=0; i<6; i++)
	{
		var j=0;
		for(j=0; j<array_polylines_sewagelines[i].array_of_vectors.length - 1; j++)
		{
			if(collidePointLine(mouseX, mouseY, array_polylines_sewagelines[i].array_of_vectors[j].x, array_polylines_sewagelines[i].array_of_vectors[j].y, array_polylines_sewagelines[i].array_of_vectors[j+1].x, array_polylines_sewagelines[i].array_of_vectors[j+1].y, 1) == true)
			{
				array_polylines_sewagelines[i].color(0, 0, 255, 255);
				tip = new Tooltip("polyline" + i, mouseX, mouseY, 100, 40);
				tip.show();
			}
			else
			{
				array_polylines_sewagelines[i].color(0, 0, 255, 255);
			}
		}
	}

	//polygon
	for(i=0; i<9; i++)
	{
		if(collidePointPoly(mouseX, mouseY, array_polygons_sewagelines[i].array_of_vectors) == true)
		{
			array_polygons_sewagelines[i].color(244, 205, 65, 255);

			for(var j=0; j<plotInfoArray.length; j++)
			{
				if(array_polygons_sewagelines[i].plotId == plotInfoArray[j].plotId)
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
			array_polygons_sewagelines[i].color(244, 205, 65, 255);
		}
	}
}

