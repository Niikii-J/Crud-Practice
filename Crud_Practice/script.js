var app = new fucntion(){
    this.el= document.getElementById('tasks');
    this.tasks=[]

    this.FetchAll = function(){
        var data='';

        if(this.tasks.length>0){
            for(i=0;i<this.tasks.length;i++){
                data+="<tr>";
                data+="<td>"+(i+1)+". "+this.task[i]+"</td>";
            }
        }
    };

    this.Add = function(){

    };

    this.Edit = function(item){

    };

    this.Delete = function(item){

    };

    this.Count = function(data){

    };
}

app.FetchAll();

function CloseInput(){
    document.getElementById('edit-box').style.display = 'none';
};