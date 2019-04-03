//loome juhtumi testimaks kontakte aadressraamatus
describe('Address Book', function() { //suite
    it('should be able to add a contact', function() { //spec
            var addressBook = new AddressBook(), //new object
                thisContact = new Contact(); //new object
//'add contact' meetod eeldab vastavat kontaktide lisamise funktsiooni failis AddressBook 
//thisContact objekt kutsutakse välja
            addressBook.addContact(thisContact);
//testime, kas kontakt on lisatud, eelduseks getContact funktsioon failis AddressBook
//parem (getContact) ja vasak pool('thisContact') peavad olema samaväärsed; 		
            expect(addressBook.getContact(0)).toBe(thisContact);
    });
});