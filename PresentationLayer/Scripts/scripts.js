<script type="text/javascript">

		$(document).ready(function(){

			var counter = 2;

			$("#addButton").click(function () {

				if(counter>10){
						alert("Only 10 textboxes allow");
						return false;
				}

				var newTextBoxDiv = $(document.createElement('div'))
					 .attr("id", 'TextBoxDiv' + counter);
					 
				newTextBoxDiv.after().html('<label>Name #'+ counter + ' : </label>' +
					  '<input type="text" name="tb_name' + counter + '" id="textboxN' + counter + '" value="" >' + 
					  '<label>Value #'+ counter + ' : </label>' +
					  '<input type="text" name="tb_value' + counter + '" id="textboxV' + counter + '" value="" >');

				newTextBoxDiv.appendTo("#TextBoxesGroup");


				counter++;
			});
///////////////// remove kısmı
			 $("#removeButton").click(function () {
			if(counter==1){
				  alert("No more textbox to remove");
				  return false;
			   }

			counter--;

				$("#TextBoxDiv" + counter).remove();

			 });
//////////////////
			 $("#getButtonValue").click(function () {

			var msg = '';
			for(i=1; i<counter; i++){
			  msg += "\n Name Textbox #" + i + " : " + $('#textboxN' + i).val() + "\t Value Textbox #" + i + " : " + $('#textboxV' + i).val();
			}
				  alert(msg);
			 });
		  });
		</script>