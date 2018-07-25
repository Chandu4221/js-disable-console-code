$(document).keydown(function (event) {
            var ctrl = event.ctrlKey, shift = event.shiftKey, c = 67, i = 73, u = 85, j = 74;
            if (ctrl && event.keyCode == u) {
                return false;
            }
            else if (ctrl & shift & event.keyCode == i) {
                return false;
            }
            else if (ctrl & shift & event.keyCode == j) {
                return false;
            }
            else if (ctrl & event.keyCode == c) {
                return false;
            }
        });
        $(document).on("selectstart", function (e) {
            e.preventDefault();
        });
        $(document).on("contextmenu", function (e) {
            e.preventDefault();
        });