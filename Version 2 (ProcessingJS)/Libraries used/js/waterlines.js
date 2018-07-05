//polygon
var array_polygons_waterlines = [];
var pointer_polygons_waterlines = null;

//polyline
var array_polylines_waterlines = [];
var pointer_polylines_waterlines = null;



//Tooltip
var tip = null;

function waterlinesData()
{
	//polyline
	var polyline0 = [createVector(814, 805), createVector(814, 573), createVector(814, 0)];
	pointer_polylines_waterlines = new PolyLine(polyline0);
	array_polylines_waterlines[0] = pointer_polylines_waterlines;

	var polyline1 = [createVector(814, 573), createVector(804, 574), createVector(539, 593), createVector(30, 617), createVector(15, 617)];
	pointer_polylines_waterlines = new PolyLine(polyline1);
	array_polylines_waterlines[1] = pointer_polylines_waterlines;

	var polyline2 = [createVector(814, 446), createVector(520, 452), createVector(485, 452), createVector(12, 477), createVector(0, 477)];
	pointer_polylines_waterlines = new PolyLine(polyline2);
	array_polylines_waterlines[2] = pointer_polylines_waterlines;

	var polyline3 = [createVector(520, 155), createVector(652, 147), createVector(814, 151)];
	pointer_polylines_waterlines = new PolyLine(polyline3);
	array_polylines_waterlines[3] = pointer_polylines_waterlines;

	var polyline4 = [createVector(73, 327), createVector(488, 305), createVector(520, 310), createVector(814, 305)];
	pointer_polylines_waterlines = new PolyLine(polyline4);
	array_polylines_waterlines[4] = pointer_polylines_waterlines;

	//polygon
	var polygon0 = [createVector(520, 573), createVector(529, 573), createVector(787, 561), createVector(804, 561), createVector(804, 452), createVector(784, 452), createVector(520, 456), createVector(520, 573)];
	pointer_polygons_waterlines = new Polygon(polygon0, "stroke");
	array_polygons_waterlines[0] = pointer_polygons_waterlines;

	var polygon1 = [createVector(483, 780), createVector(475, 780), createVector(23, 763), createVector(15, 763), createVector(15, 754), createVector(15, 621), createVector(28, 621), createVector(485, 604), createVector(485, 612), createVector(483, 780)];
	pointer_polygons_waterlines = new Polygon(polygon1, "stroke");
	array_polygons_waterlines[1] = pointer_polygons_waterlines;

	var polygon2 = [createVector(518, 599), createVector(517, 784), createVector(530, 784), createVector(787, 805), createVector(803, 805), createVector(803, 580), createVector(784, 580), createVector(525, 599), createVector(518, 599)];
	pointer_polygons_waterlines = new Polygon(polygon2, "stroke");
	array_polygons_waterlines[2] = pointer_polygons_waterlines;

	var polygon3 = [createVector(484, 579), createVector(475, 579), createVector(24, 596), createVector(15, 596), createVector(15, 484), createVector(27, 484), createVector(484, 460), createVector(484, 579)];
	pointer_polygons_waterlines = new Polygon(polygon3, "stroke");
	array_polygons_waterlines[3] = pointer_polygons_waterlines;

	var polygon4 = [createVector(12, 453), createVector(27, 453), createVector(57, 455), createVector(484, 432), createVector(484, 314), createVector(475, 314), createVector(308, 322), createVector(73, 335), createVector(24, 368), createVector(12, 368), createVector(12, 453)];
	pointer_polygons_waterlines = new Polygon(polygon4, "stroke");
	array_polygons_waterlines[4] = pointer_polygons_waterlines;

	var polygon5 = [createVector(801, 421), createVector(783, 421), createVector(520, 427), createVector(520, 318), createVector(529, 318), createVector(788, 312), createVector(801, 312), createVector(801, 421)];
	pointer_polygons_waterlines = new Polygon(polygon5, "stroke");
	array_polygons_waterlines[5] = pointer_polygons_waterlines;

	var polygon6 = [createVector(801, 280), createVector(801, 173), createVector(782, 173), createVector(652, 171), createVector(529, 180), createVector(520, 180), createVector(520, 291), createVector(584, 291), createVector(665, 286), createVector(801, 280)];
	pointer_polygons_waterlines = new Polygon(polygon6, "stroke");
	array_polygons_waterlines[6] = pointer_polygons_waterlines;

	var polygon7 = [createVector(527, 145), createVector(526, 48), createVector(588, 18), createVector(602, 15), createVector(801, 9), createVector(801, 141), createVector(610, 141), createVector(527, 145)];
	pointer_polygons_waterlines = new Polygon(polygon7, "stroke");
	array_polygons_waterlines[7] = pointer_polygons_waterlines;

	var polygon8 = [createVector(494, 101), createVector(488, 286), createVector(365, 289), createVector(131, 301), createVector(127, 301), createVector(147, 280), createVector(487, 101), createVector(494, 101)];
	pointer_polygons_waterlines = new Polygon(polygon8, "stroke");
	array_polygons_waterlines[8] = pointer_polygons_waterlines;

}

function waterlines()
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
				array_polylines_waterlines[i].color(0, 0, 0, 255);
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
			array_polygons_waterlines[i].color(0, 0, 0, 255);
			tip = new Tooltip("polygon" + i, mouseX, mouseY, 100, 40);
			tip.show();
		}
		else
		{
			array_polygons_waterlines[i].color(0, 0, 0, 255);
		}
	}
}

