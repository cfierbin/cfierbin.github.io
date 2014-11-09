function QuestionController($scope){

/*
$scope.questions = {

"Q1":{"text":"Which of the following does not extend java.util.Collection?",
	   "a1":"Vector",
	   "a2":"Hashtable",
	   "a3":"ArrayList",
	   "a4":"TreeSet"
	  },
"Q2":{"text":"Which of the following collection class is synchronized?",
	   "a1":"Vector",
	   "a2":"Hashtable",
	   "a3":"HashMap",
	   "a4":"LinkedHashMap",
	   "a5":"none of the above"
	  },
"Q3":{"text":"Integer extends Number.",
	   "a1":"True",
	   "a2":"False",
	  }

};
*/

//array of objects!
//filters expect an array, not an object of objects!

$scope.questions = [

{text:'Which of the following does not extend java.util.Collection?',
	   a1:'Vector',
	   a2:'Hashtable',
	   a3:'ArrayList',
	   a4:'TreeSet',
	   r:2
	  },
{text:'Which of the following collection classes is synchronized?',
	   a1:'Vector',
	   a2:'Hashtable',
	   a3:'LinkedHashMap',
	   a4:'none of the above',
	   r:2
	  },
{text:'How many abstract methods are there in the interface Runnable?',
	   a1:'1',
	   a2:'2',
	   a3:'3',
	   a4:'there are no abstract methods in the interface Runnable',
	   r:1
	  }
];

}