//polygon
var array_polygons_basemap = [];
var pointer_polygons_basemap = null;



//Map size
var zoom = 0.5;

//Alignment -> Only a basemap property
var alignX = 0;
var alignY = 5;

//Tooltip
var tip = null;

function basemapData()
{
	//polygon
	var polygon0 = [createVector(508*zoom + alignX, 564*zoom + alignY), createVector(516*zoom + alignX, 564*zoom + alignY), createVector(775*zoom + alignX, 552*zoom + alignY), createVector(792*zoom + alignX, 552*zoom + alignY), createVector(792*zoom + alignX, 443*zoom + alignY), createVector(772*zoom + alignX, 443*zoom + alignY), createVector(508*zoom + alignX, 446*zoom + alignY), createVector(508*zoom + alignX, 564*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon0, "stroke");
	array_polygons_basemap[0] = pointer_polygons_basemap;

	var polygon1 = [createVector(471*zoom + alignX, 771*zoom + alignY), createVector(463*zoom + alignX, 771*zoom + alignY), createVector(11*zoom + alignX, 754*zoom + alignY), createVector(3*zoom + alignX, 754*zoom + alignY), createVector(3*zoom + alignX, 744*zoom + alignY), createVector(3*zoom + alignX, 612*zoom + alignY), createVector(16*zoom + alignX, 612*zoom + alignY), createVector(473*zoom + alignX, 594*zoom + alignY), createVector(473*zoom + alignX, 603*zoom + alignY), createVector(471*zoom + alignX, 771*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon1, "stroke");
	array_polygons_basemap[1] = pointer_polygons_basemap;

	var polygon2 = [createVector(506*zoom + alignX, 590*zoom + alignY), createVector(505*zoom + alignX, 775*zoom + alignY), createVector(517*zoom + alignX, 775*zoom + alignY), createVector(775*zoom + alignX, 796*zoom + alignY), createVector(791*zoom + alignX, 796*zoom + alignY), createVector(791*zoom + alignX, 570*zoom + alignY), createVector(772*zoom + alignX, 570*zoom + alignY), createVector(513*zoom + alignX, 590*zoom + alignY), createVector(506*zoom + alignX, 590*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon2, "stroke");
	array_polygons_basemap[2] = pointer_polygons_basemap;

	var polygon3 = [createVector(472*zoom + alignX, 570*zoom + alignY), createVector(463*zoom + alignX, 570*zoom + alignY), createVector(11*zoom + alignX, 587*zoom + alignY), createVector(3*zoom + alignX, 587*zoom + alignY), createVector(3*zoom + alignX, 475*zoom + alignY), createVector(15*zoom + alignX, 474*zoom + alignY), createVector(472*zoom + alignX, 451*zoom + alignY), createVector(472*zoom + alignX, 570*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon3, "stroke");
	array_polygons_basemap[3] = pointer_polygons_basemap;

	var polygon4 = [createVector(0*zoom + alignX, 444*zoom + alignY), createVector(15*zoom + alignX, 444*zoom + alignY), createVector(45*zoom + alignX, 445*zoom + alignY), createVector(472*zoom + alignX, 423*zoom + alignY), createVector(472*zoom + alignX, 305*zoom + alignY), createVector(463*zoom + alignX, 305*zoom + alignY), createVector(296*zoom + alignX, 312*zoom + alignY), createVector(61*zoom + alignX, 326*zoom + alignY), createVector(12*zoom + alignX, 359*zoom + alignY), createVector(0*zoom + alignX, 359*zoom + alignY), createVector(0*zoom + alignX, 444*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon4, "stroke");
	array_polygons_basemap[4] = pointer_polygons_basemap;

	var polygon5 = [createVector(789*zoom + alignX, 411*zoom + alignY), createVector(771*zoom + alignX, 411*zoom + alignY), createVector(508*zoom + alignX, 417*zoom + alignY), createVector(507*zoom + alignX, 308*zoom + alignY), createVector(517*zoom + alignX, 308*zoom + alignY), createVector(776*zoom + alignX, 302*zoom + alignY), createVector(789*zoom + alignX, 302*zoom + alignY), createVector(789*zoom + alignX, 411*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon5, "stroke");
	array_polygons_basemap[5] = pointer_polygons_basemap;

	var polygon6 = [createVector(789*zoom + alignX, 271*zoom + alignY), createVector(789*zoom + alignX, 163*zoom + alignY), createVector(770*zoom + alignX, 163*zoom + alignY), createVector(640*zoom + alignX, 161*zoom + alignY), createVector(517*zoom + alignX, 170*zoom + alignY), createVector(507*zoom + alignX, 170*zoom + alignY), createVector(507*zoom + alignX, 281*zoom + alignY), createVector(571*zoom + alignX, 281*zoom + alignY), createVector(653*zoom + alignX, 277*zoom + alignY), createVector(789*zoom + alignX, 271*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon6, "stroke");
	array_polygons_basemap[6] = pointer_polygons_basemap;

	var polygon7 = [createVector(514*zoom + alignX, 136*zoom + alignY), createVector(514*zoom + alignX, 39*zoom + alignY), createVector(576*zoom + alignX, 9*zoom + alignY), createVector(589*zoom + alignX, 6*zoom + alignY), createVector(789*zoom + alignX, 0*zoom + alignY), createVector(789*zoom + alignX, 132*zoom + alignY), createVector(598*zoom + alignX, 132*zoom + alignY), createVector(514*zoom + alignX, 136*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon7, "stroke");
	array_polygons_basemap[7] = pointer_polygons_basemap;

	var polygon8 = [createVector(482*zoom + alignX, 92*zoom + alignY), createVector(476*zoom + alignX, 277*zoom + alignY), createVector(353*zoom + alignX, 280*zoom + alignY), createVector(119*zoom + alignX, 291*zoom + alignY), createVector(115*zoom + alignX, 291*zoom + alignY), createVector(135*zoom + alignX, 271*zoom + alignY), createVector(475*zoom + alignX, 92*zoom + alignY), createVector(482*zoom + alignX, 92*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon8, "stroke");
	array_polygons_basemap[8] = pointer_polygons_basemap;

	var polygon9 = [createVector(13*zoom + alignX, 620*zoom + alignY), createVector(13*zoom + alignX, 748*zoom + alignY), createVector(465*zoom + alignX, 764*zoom + alignY), createVector(465*zoom + alignX, 599*zoom + alignY), createVector(13*zoom + alignX, 620*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon9, "fill", "1");
	array_polygons_basemap[9] = pointer_polygons_basemap;

	var polygon10 = [createVector(515*zoom + alignX, 599*zoom + alignY), createVector(515*zoom + alignX, 764*zoom + alignY), createVector(773*zoom + alignX, 785*zoom + alignY), createVector(773*zoom + alignX, 579*zoom + alignY), createVector(515*zoom + alignX, 599*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon10, "fill", "2");
	array_polygons_basemap[10] = pointer_polygons_basemap;

	var polygon11 = [createVector(13*zoom + alignX, 483*zoom + alignY), createVector(13*zoom + alignX, 576*zoom + alignY), createVector(465*zoom + alignX, 560*zoom + alignY), createVector(465*zoom + alignX, 459*zoom + alignY), createVector(13*zoom + alignX, 483*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon11, "fill", "3");
	array_polygons_basemap[11] = pointer_polygons_basemap;

	var polygon12 = [createVector(514*zoom + alignX, 453*zoom + alignY), createVector(514*zoom + alignX, 552*zoom + alignY), createVector(773*zoom + alignX, 542*zoom + alignY), createVector(773*zoom + alignX, 450*zoom + alignY), createVector(514*zoom + alignX, 453*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon12, "fill", "4");
	array_polygons_basemap[12] = pointer_polygons_basemap;

	var polygon13 = [createVector(13*zoom + alignX, 366*zoom + alignY), createVector(13*zoom + alignX, 435*zoom + alignY), createVector(46*zoom + alignX, 437*zoom + alignY), createVector(75*zoom + alignX, 435*zoom + alignY), createVector(465*zoom + alignX, 415*zoom + alignY), createVector(465*zoom + alignX, 310*zoom + alignY), createVector(64*zoom + alignX, 334*zoom + alignY), createVector(38*zoom + alignX, 349*zoom + alignY), createVector(13*zoom + alignX, 366*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon13, "fill", "5");
	array_polygons_basemap[13] = pointer_polygons_basemap;

	var polygon14 = [createVector(514*zoom + alignX, 315*zoom + alignY), createVector(514*zoom + alignX, 413*zoom + alignY), createVector(773*zoom + alignX, 404*zoom + alignY), createVector(773*zoom + alignX, 309*zoom + alignY), createVector(514*zoom + alignX, 315*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon14, "fill", "6");
	array_polygons_basemap[14] = pointer_polygons_basemap;

	var polygon15 = [createVector(521*zoom + alignX, 176*zoom + alignY), createVector(521*zoom + alignX, 207*zoom + alignY), createVector(507*zoom + alignX, 207*zoom + alignY), createVector(507*zoom + alignX, 280*zoom + alignY), createVector(571*zoom + alignX, 280*zoom + alignY), createVector(571*zoom + alignX, 273*zoom + alignY), createVector(648*zoom + alignX, 268*zoom + alignY), createVector(773*zoom + alignX, 264*zoom + alignY), createVector(773*zoom + alignX, 170*zoom + alignY), createVector(640*zoom + alignX, 169*zoom + alignY), createVector(521*zoom + alignX, 176*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon15, "fill", "7");
	array_polygons_basemap[15] = pointer_polygons_basemap;

	var polygon16 = [createVector(521*zoom + alignX, 47*zoom + alignY), createVector(521*zoom + alignX, 128*zoom + alignY), createVector(595*zoom + alignX, 125*zoom + alignY), createVector(772*zoom + alignX, 125*zoom + alignY), createVector(772*zoom + alignX, 12*zoom + alignY), createVector(590*zoom + alignX, 17*zoom + alignY), createVector(544*zoom + alignX, 37*zoom + alignY), createVector(521*zoom + alignX, 47*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon16, "fill", "8");
	array_polygons_basemap[16] = pointer_polygons_basemap;

	var polygon17 = [createVector(469*zoom + alignX, 268*zoom + alignY), createVector(355*zoom + alignX, 272*zoom + alignY), createVector(132*zoom + alignX, 282*zoom + alignY), createVector(476*zoom + alignX, 101*zoom + alignY), createVector(469*zoom + alignX, 268*zoom + alignY)];
	pointer_polygons_basemap = new Polygon(polygon17, "fill", "9");
	array_polygons_basemap[17] = pointer_polygons_basemap;

}

function basemap(plotInfoArray)
{
	//clear();
	var i = 0;
	var value = 0;

	//polygon
	for(i=0; i<18; i++)
	{
		if(collidePointPoly(mouseX, mouseY, array_polygons_basemap[i].array_of_vectors) && (array_polygons_basemap[i].stroke_or_fill == "fill") == true)
		{
			array_polygons_basemap[i].color(244, 205, 65, 255);

			for(var j=0; j<plotInfoArray.length; j++)
			{
				if(array_polygons_basemap[i].plotId == plotInfoArray[j].plotId)
				{
					var floorInfo = "";
					for(var k=0; k<plotInfoArray[j].eachFloorUsage.length; k++)
					{
						floorInfo += '\n' + "Floor " + k + ": " + plotInfoArray[j].eachFloorUsage[k].floor;
					}

					var plotId = plotInfoArray[j].plotId;
					var plotUse = plotInfoArray[j].plotUse;
					var frontWidth = plotInfoArray[j].frontWidth;
					var buildingName = plotInfoArray[j].buildingName;
					var officialPlotNumber = plotInfoArray[j].officialPlotNumber;
					var yearOfBuilt = plotInfoArray[j].yearOfBuilt;
					var numberOfFloors = plotInfoArray[j].numOfFloors;

					document.body.addEventListener("click", function(event){
						document.getElementById("span__plotID").innerHTML = plotId;
						document.getElementById("span__plotUse").innerHTML = plotUse;
						document.getElementById("span__frontWidth").innerHTML = frontWidth;
						document.getElementById("span__buildingName").innerHTML = buildingName;
						document.getElementById("span__officialPlotNumber").innerHTML = officialPlotNumber;
						document.getElementById("span__yearOfBuilt").innerHTML = yearOfBuilt;
						document.getElementById("span__numberOfFloors").innerHTML = numberOfFloors;
						document.getElementById("span__eachFloorUsage").innerHTML = floorInfo;
					});

					tip = new Tooltip("Plot ID: " + array_polygons_basemap[i].plotId, mouseX, mouseY, 100, 35);
					tip.show();
				}
				else
				{
					tip = new Tooltip("Plot ID: " + array_polygons_basemap[i].plotId, mouseX, mouseY, 100, 35);
					tip.show();
				}
			}
		}
		else
		{
			array_polygons_basemap[i].color(244, 205, 65, 255);
		}
	}
}

