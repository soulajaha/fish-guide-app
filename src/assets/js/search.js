(function () {
    let i = 0, j = 0;
    let el = {};
  
    document.addEventListener("DOMContentLoaded", function () {
        el.keywordSearchValue =
            document.querySelectorAll(".js-fish-search-value");
        el.keywordSearchButton =
            document.querySelectorAll(".js-fish-search-button");
        el.keywordSearchItem =
            document.querySelectorAll(".js-fish-search-item");
        el.aquariumTitle =
            document.querySelectorAll(".js-fish-aqua-title");
        
        if(el.keywordSearchValue.length && el.keywordSearchButton.length && el.keywordSearchItem.length) {
            keywordSearch();
        }
    }, false);
  
    function keywordSearch () {
        for (i = 0; i < el.keywordSearchButton.length; ++i) {
            el.keywordSearchButton[i].addEventListener("click", keywordSearchSwitch, false);
        }
  
        for (i = 0; i < el.keywordSearchValue.length; ++i) {
            el.keywordSearchValue[i].addEventListener("input", keywordSearchSwitch, false);
        }

        function keywordSearchSwitch () {
            el.searchValue = el.keywordSearchValue[0].value.toLowerCase();

            if (el.searchValue.length) {
                for (j = 0; j < el.aquariumTitle.length; ++j) {
                    el.aquariumTitle[j].style.display = "none";
                }

                for (j = 0; j < el.keywordSearchItem.length; ++j) {
                    el.keywordSearchItem[j].style.display = "none";
                }
  
                for (j = 0; j < el.keywordSearchItem.length; ++j) {
                    el.searchTarget = el.keywordSearchItem[j].querySelector(".js-fish-search-target").textContent.toLowerCase();
  
                    if (el.searchTarget.indexOf(el.searchValue) !== -1) {
                        el.keywordSearchItem[j].style.display = "block";
                    }
                }
            } else {
                for (j = 0; j < el.aquariumTitle.length; ++j) {
                    el.aquariumTitle[j].style.display = "flex";
                }

                for (j = 0; j < el.keywordSearchItem.length; ++j) {
                    el.keywordSearchItem[j].style.display = "block";
                }
            }
        };
    }
}());
