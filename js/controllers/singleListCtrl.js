angular.module('app').controller('singleListCtrl', function(listFactory, cardFactory) {
    this.removeList = function(list) {
        listFactory.removeList(list);
    };

    this.getCards = function(list) {
        return cardFactory.getCards(list);
    };
    this.createCard = function(list) {
        cardFactory.createCard(list, this.cardDescription);
        this.cardDescription = '';
    }
});