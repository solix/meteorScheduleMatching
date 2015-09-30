TaskCollection = new Mongo.Collection("tasks");
WorkerCollection = new Mongo.Collection("worker");
MatchCollection= new Mongo.Collection("match");

if (Meteor.isClient) {
  
  Template.worker.helpers({

    worker: function () {

      return WorkerCollection.find({});
    }
  });  
  Template.tasks.helpers({

    tasks: function () {

      return TaskCollection.find({},{sort: {start: +1}});
    }

  });  

  // Template.match.helpers({

  //   var availableTasks = TaskCollection.find({},{assigned:false}).map(function(t){return t});
  //   var availableworker = WorkerCollection.find({},{assigned:false}).map(function(t){return t});

    
  //   for(var i=0;i<availableTasks.length;i++){
  //     for(var j=0;i<availableworker.length;j++ ){

  //        var task= availableTasks[i];
  //        var worker = availableworker[j];
  //        var workerslot= worker.timeslot;
  //        if(task.flag )

  //     }

  //   }

  //   //var availibleworker = WorkerCollection.find({},{timeslot.availible: true});
    



  // });


  //here is  SASA-matching algorithm

/**
    FOR each task FROM TaskCollection
    | IF (assigned == false)
    |  |  taskflag = get the task flag(for example: 10-12)     
    | ENDIF   
    |  FOR each worker From collection
    |  |  **get worker slots
    |  |    IF (worker timeslot is availible for a given task flag)
    |  |    |   1-assign the task to the worker
    |  |    |   2-set the task assigned to true
    |  |    |   3-set the timeslot.available to false
    |  |    |   4-create a document in MatchCollection
    |  |    END IF 
    |  ENDFOR     
    ENDFOR

*/

  var matcher = function(task,worker){
    var tasklist = TaskCollection.findOne({},{assigned:false});
    var Workerlist= WorkerCollection.find({});

    //for each task from task list
    



  }
  

  

}