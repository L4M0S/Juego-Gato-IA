function SearchMove()
{
	CellAvailable=false;

	while(CellAvailable==false)
	{
		x=Math.round(Math.random()*2);
		y=Math.round(Math.random()*2);
		if(board[x][y]==0)	
		{
			CellAvailable=true;
		}
	}
	PaintCell(x,y);	
}