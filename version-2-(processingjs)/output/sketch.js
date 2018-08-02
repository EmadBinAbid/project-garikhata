//Setting the plot list after AJAX API CALL is made

var plotList = null;
var isActiveArray = [false, false, false, false, false];

function setPlotList(passedPlotList)
{
	plotList = passedPlotList;
	// console.log(plotList);
}

console.log(plotList);

//On-Off Tracker
var num = [1, 0, 0, 0, 0];	//Make an array instead
var numm = 0;

function setup()
{
	createCanvas(500, 500);
	background(255);

	basemapData();
	plotprofileData();
	waterlinesData();
	gaslinesData();
	sewagelinesData();
}

				
function draw()
{	
	clear();
	background(255);

	document.getElementById('baseMap').onclick = function()
	{
		if(isActiveArray[0] === false)
		{
			isActiveArray[0] = true;
			num[0] = 1;

			$('#baseMap').removeClass('btn-plain-dark').addClass('btn-plain');
		}
		else
		{
			isActiveArray[0] = false;
			num[0] = 0;
			clear();

			$('#baseMap').removeClass('btn-plain').addClass('btn-plain-dark');
		}
	}

	document.getElementById('plotProfile').onclick = function()
	{	
		
		if(isActiveArray[1] === false)
		{
			isActiveArray[1] = true;
			num[1] = 1;

			$('#plotProfile').removeClass('btn-plain-dark').addClass('btn-plain');
		}
		else
		{
			isActiveArray[1] = false;
			num[1] = 0;
			clear();

			$('#plotProfile').removeClass('btn-plain').addClass('btn-plain-dark');
		}		
	}

	document.getElementById('waterLines').onclick = function()
	{
		if(isActiveArray[2] === false)
		{
			isActiveArray[2] = true;
			num[2] = 1;

			$('#waterLines').removeClass('btn-blue-dark').addClass('btn-blue');
		}
		else
		{
			isActiveArray[2] = false;
			num[2] = 0;
			clear();

			$('#waterLines').removeClass('btn-blue').addClass('btn-blue-dark');
		} 		
	}

	document.getElementById('gasLines').onclick = function()
	{	
		
		if(isActiveArray[3] === false)
		{
			isActiveArray[3] = true;
			num[3] = 1;

			$('#gasLines').removeClass('btn-red-dark').addClass('btn-red');
		}
		else
		{
			isActiveArray[3] = false;
			num[3] = 0;
			clear();

			$('#gasLines').removeClass('btn-red').addClass('btn-red-dark');
		}		
	}

	document.getElementById('sewageLines').onclick = function()
	{	
		
		if(isActiveArray[4] === false)
		{
			isActiveArray[4] = true;
			num[4] = 1;

			$('#sewageLines').removeClass('btn-green-dark').addClass('btn-green');
		}
		else
		{
			isActiveArray[4] = false;
			num[4] = 0;
			clear();

			$('#sewageLines').removeClass('btn-green').addClass('btn-green-dark');
		} 		
	}

	if(num[0] === 1)
	{
		basemap(plotList);	
	}
	if(num[4] === 1)
	{
		sewagelines(plotList);	
	}

	
	if(num[2] === 1)
	{
		waterlines(plotList);	
	}

	if(num[3] === 1)
	{
		gaslines(plotList);	
	}

	if(num[1] === 1)
	{
		plotprofile(plotList);	
	}
}