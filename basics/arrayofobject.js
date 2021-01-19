  const arrayofobj = [{
      title: 'c book',
      price: 123,
      isbn: 'isjjjdn'
  },
    {
        title: 'c ++book',
        price: 135,
        isbn: 'isj5jdn'
    },{
        title: 'JS book',
        price: 193,
        isbn: 'is7jdn'
    }]

    const checkindex = arrayofobj.findIndex(function(arrayofobj, checkindex){
        return arrayofobj.title == 'JS book'
    }) 

    console.log(checkindex)