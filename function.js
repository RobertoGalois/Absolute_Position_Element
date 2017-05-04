function getAbsoluteCoord(element)
{
	var rTop = 0;   //retour top
	var rLeft = 0;  //retour left

	do
	{
		rTop += element.offsetTop;        //on incremente au retour la coord de depart de l'element
		rLeft += element.offsetLeft;      //puis a chaque tout de boucle, on lui ajoute la coord de l'element parent jusqu'à ce qu'il n'y ai plus de parent en referentiel <==> element.offsetParent = false
	}
	while(element = element.offsetParent);

  //on retourne un objet pour avoir les 2 valeurs, c'est moins chiant à exploiter qu'un tableau
	return {
		top : rTop,
		left: rLeft
	};
}
