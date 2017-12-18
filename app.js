$(document).ready(function() {
  var catList = [
            {
              catId: 1,
              catName: "Solomon",
              catImage: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
              catCount: 0
          },
          {
              catId: 2,
              catName: "Jake",
              catImage: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
              catCount: 0
          },
          {
              catId: 3,
              catName: "Tom & Jerry",
              catImage: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
              catCount: 0
          },
          {
              catId: 4,
              catName: "Grumpy",
              catImage: "https://pbs.twimg.com/profile_images/848471660860538880/pevXVsIp.jpg",
              catCount: 0
          },
          {
              catId: 5,
              catName: "Nico",
              catImage: "https://news.nationalgeographic.com/content/dam/news/photos/000/755/75552.ngsversion.1422285553360.adapt.1900.1.jpg",
              catCount: 0
          }
  ]; // end of cat list array
  
  for (var i = 0; i < catList.length; i++) {
    var cat = catList[i];
    
    var elem = document.createElement('div');
    elem.textContent = cat.catName;
    
    elem.addEventListener('click', (function(catCopy) {
      return function() {
        var list = document.getElementById("catList");
        var image = document.getElementById("catDisplay");
        list.innerHTML = "<ul><li>" + catCopy.catName + "</li></ul>"
        image.innerHTML = "<img src='" + catCopy.catImage + "'>"
        $('#catDisplay').on('click', (function() {
          catCopy.catCount++;
          var count = document.getElementById("catCount");
          count.innerHTML = catCopy.catCount;
        })); // end of image click
      }; // end inner click func
    })(cat)); // end of click function
    document.body.appendChild(elem);
  } // end of i loop
  
}); // end of doc.ready
  
