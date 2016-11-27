var klass = require('./klass')

exports.add = function (klasses) {
	klasses.forEach(function (item, index) {
		klass.add(item.teacherName, item.students)
		// klass.add(item)
		console.log(item)
	})
}

// require('./index').add([{teacherName:'scott'}, {students:['小明', '小红', '小黑']}])
require('./index').add([{'teacherName':'scott',"students":["fff", "aaa"]}
						,{'teacherName':'will',"students":["wtf", "wtf2"]}])

// require('./index').add(['scott',['aaa', 'bbb']])

// require('./index').add([{'teacherName':'JAMES','students':['aaa', 'bbb']}
// 						,{'teacherName':'LOVE','students':['ccc', 'ddd']}])


// this.add ('scott', ['小明', '小红', '小黑'])

// klass.add('scott', ['小明', '小红'])

// var index = require('./index')

// var studentsOne = ["A","B"]

// var studentsTwo = ["C","D"]

// var classOne = {"teacherName":'JAMES',"students":studentsOne}

// var classTwo = {"teacherName":'LOVE',"students":studentsTwo}

// var school =[classOne,classTwo]

// index.add(school)

// var classOne = {"teacherName":'JAMES',"students":['aaa', 'bbb']}

// var classTwo = {"teacherName":'LOVE',"students":['ccc', 'ddd']}

// require('./index').add([{"teacherName":'JAMES',"students":['aaa', 'bbb']}
// 						,{"teacherName":'LOVE',"students":['ccc', 'ddd']}])

// var school =[classOne,classTwo]

// require('./index').add(school)