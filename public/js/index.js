
 $(document).ready(function(){ 
$('#data-table').DataTable({  
    "ajax" : "../JSON/details.json",
              
        "columns"     :     [  
            {     "data"     :     "id"     },  
            {     "data"     :     "first_name"},  
            {     "data"     :     "first_name"},
            {     "data"     :     "email"    },
            {     "data"     :     "gender" }
       ]  
});   
})  