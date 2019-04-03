//kirjutame aadressiraamatu konstruktor-funktsioooni
function AddressBook() {
   //lisame massiivi kontaktide jaoks:
    this.contacts = [];
}
//kirjutame funktsiooni 'addContact', parameetriks kontakt
AddressBook.prototype.addContact = function(contact) {
//lükkame (push) selle kontakti eelnevalt loodud massiivi
	this.contacts.push(contact);
}
//tagastame vastava indeksiga massiivi elemendi
AddressBook.prototype.getContact = function(index) {
    return this.contacts[index];
}
//kontakti kustutamine, eemladame massiivist elemendi 
//(splice() method to change the contents of an array)
AddressBook.prototype.deleteContact = function(index) {
    return this.contacts.splice(index, 1);
}