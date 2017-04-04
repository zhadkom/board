angular.module('app').factory('listFactory', function(){
    var service = {};

    var lists = [
        {
            id: 1,
            listName: 'Todo'
        },
        {
            id: 2,
            listName: 'Doing'
        },
        {
            id: 3,
            listName: 'Done'
        }
    ];

    service.addList = function(listName) {
        lists.push({
            id: _.uniqueId('list_'),
            listName: listName
        });
    };

    service.getLists = function() {
        return lists;
    };

    service.removeList = function(list) {
        _.pull(lists, list);
    };


    return service;
});