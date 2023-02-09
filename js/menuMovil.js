(function () {

/*=================================================
=            Propiedades de menu movil            =
=================================================*/

var promenu = {
	burguer_menu: document.getElementById('burguer_menu'),
	slide_menu: document.getElementById('slideMenu'),
	menu_activo: false,
	elem_menu: document.querySelectorAll('#slideMenu .menu-principal a')
}

/*=================================================
=            Métodos de menu movil            =
=================================================*/

var metmenu = {
	inicio: function () {
		promenu.burguer_menu.addEventListener('click', metmenu.toggleMenu);

		for (var i = 0; i < promenu.elem_menu.length; i++) {
			promenu.elem_menu[i].addEventListener('click', metmenu.ocultarMenu);
		}
	},

	toggleMenu: function () {
		if (promenu.menu_activo == false) {
			promenu.menu_activo = true;
			promenu.slide_menu.className = promenu.slide_menu.className + ' active';
		} else{
			promenu.menu_activo = false;
			promenu.slide_menu.className = promenu.slide_menu.className.replace('active', '');
		}
	},

	ocultarMenu: function () {
		promenu.menu_activo = false;
		promenu.slide_menu.className = promenu.slide_menu.className.replace('active', '');
	}
}

metmenu.inicio();

}())