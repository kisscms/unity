
function GetUserID()
{	
  GetUnity().SendMessage( "Director", "PutUserID", "0;1" );
}