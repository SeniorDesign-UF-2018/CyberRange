//list of vm walkthrough objects
//this is what you add to display a new walkthrough object
var vm1 = {title:"RickdiculouslyEasy", difficulty:3, down_link:"https://download.vulnhub.com/rickdiculouslyeasy/RickdiculouslyEasy.zip", walk_link:"rickAndMortyVM.html", description: "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia consectetur ex nec rutrum. Etiam fringilla sed lorem eget vulputate. Proin lacinia magna vel tortor ullamcorper maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc quis purus velit. Quisque lacinia iaculis porta. Praesent tincidunt diam vel tellus sagittis, a aliquam massa facilisis. Ut faucibus eros lacinia, aliquet justo ut, dictum neque. In hac habitasse platea dictumst. Duis placerat, enim quis sollicitudin placerat, orci quam aliquam erat, ac scelerisque nisi quam ultricies ligula."}

var vm2 = {title:"Kioptrix Level 1", difficulty:2, down_link:"http://www.kioptrix.com/dlvm/Kioptrix_Level_1.rar", walk_link:"Kioptrix_Level_1.html", description: "Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia consectetur ex nec rutrum. Etiam fringilla sed lorem eget vulputate. Proin lacinia magna vel tortor ullamcorper maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc quis purus velit. Quisque lacinia iaculis porta. Praesent tincidunt diam vel tellus sagittis, a aliquam massa facilisis. Ut faucibus eros lacinia, aliquet justo ut, dictum neque. In hac habitasse platea dictumst. Duis placerat, enim quis sollicitudin placerat, orci quam aliquam erat, ac scelerisque nisi quam ultricies ligula."}


//array to store all of the vm walkthroughs
var all_VMs = [vm1, vm2];

//initial vm
var current_VM = all_VMs[0];

//fill vm_list with available VMs
for (i = 0; i < all_VMs.length; i++) {
  var vm = all_VMs[i];
  var vmNum = i + 1;

  vm_element_string = "<div class='vm_list_border vm_list_item' id='vm" + vmNum + "'>"
                    + vm.title + "</div>";
  var vm_element = $(vm_element_string);

  vm_element.attr('class', "vm_list_border vm_list_item");
  vm_element.attr('id', "vm" + vmNum.toString());
  vm_element.html(vm.title);

  $("#vm_list").append(vm_element);
}

//Event handler that fires when a vm walkthrough is selected
$('.vm_list_item').click(function() {
  //grab selected vm object
  var id = $(this).attr("id");
  var WalkNum = parseInt(id.replace(/[^0-9\.]/g, ''), 10);
  current_VM = all_VMs[WalkNum - 1];

  //build star string
  var diffLVL = current_VM.difficulty;
  var starString = "";
  for (i = 1; i <= 5; i++) {
    if (i <= diffLVL) {
      starString += "&#9733; ";
    }
    else {
      starString += "&#9734; ";
    }
  }


  //code to update vm display to selected vm
  $("#target h2").text(current_VM.title);
  $("#target #stars").html(starString);
  $("#target p").html(current_VM.description);

});


//Event handler for Download Button when clicked
$(".download_button").click(function() {
  window.location.href = current_VM.down_link;
})

//Event handler for Walkthrough Button when clicked
$(".walkthrough_button").click(function() {
  window.location = current_VM.walk_link;
})
