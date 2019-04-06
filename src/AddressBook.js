//kirjutame aadressiraamatu konstruktor-funktsioooni
function AddressBook() {
   //lisame massiivi kontaktide jaoks:
    this.contacts = [];
    //asünkroonse funktsiooni jaoks
    this.initialComplete = false;
}
//esialgsete kontaktide kättesaamiseks aadressraamatust asünkroonse meetodiga
//uus funktsioon, teeme selle asünkroonseks kasutades 'setTimeout'-funktsiooni
//vaja informeerida testsüsteemi, kui asünkroonne funktsioon on lõpetanud
AddressBook.prototype.getInitialContacts = function(cb) {
    var self = this;

    setTimeout(function() {
        //võlts API kutsutakse välja, kui asünkroonne funktsioon on lõpetanud
        self.initialComplete = true;
        if (cb) {
            return cb();
        }
    }, 3);
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