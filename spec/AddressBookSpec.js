//loome juhtumi testimaks kontakte aadressraamatus
describe('Address Book', function() { //suite
    //toome ühesugused muutujad spec-idest välja, rakenduvad üle-suite nüüd
    var addressBook,
        thisContact;

    //kirjutame üldise funktsiooni, millega
    beforeEach(function() {
        //enne iga testi kutsutakse välja aadressraamatu ja kontakti objektid
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('should be able to add a contact', function() { //spec
//'add contact' meetod eeldab vastavat kontaktide lisamise funktsiooni failis AddressBook 
//thisContact objekt kutsutakse välja
            addressBook.addContact(thisContact);
//testime, kas kontakt on lisatud, eelduseks getContact funktsioon failis AddressBook
//parem (getContact) ja vasak pool('thisContact') peavad olema samaväärsed; 		
            expect(addressBook.getContact(0)).toBe(thisContact);
    });
//kirjeldame it-meetodiga uue spec-i 
//'delete a contact' funktsiooni jaoks
    it('should be able to delete a contact', function() {
//kasutame eelpool defineeritud muutujaid
//lisame kontakti, et saaks seda kustutada ja kustutame
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);
//testime: kui saan esimese kontakti aadressraamatust, 
// eeldan, et pärast kustutamist seda objekti ei eksisteeri
        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

//kirjutame uue, asünkroonse test-suite, et testida 
//algsete kontaktide kättesaamist - asünkroonset fn-i
describe('Async Address Book', function() {
    //kutsume muutuja
    var addressBook = new AddressBook();
    
    //et test-expectation alustaks pärast asünk-funktsiooni lõppu,
    //kasutame beforeEach ja done-funktsiooni, mis teatab
    //raamistikule, kui asünk funktsioon jõudis lõpuni
    beforeEach(function(done) {
        addressBook.getInitialContacts(function() {
            //kutsume done-funktsiooni välja
            done();
        });
    });

    it('should grab initial contacts', function(done) { //spec   
        //algsed kontaktid kätte saadud,
        expect(addressBook.initialComplete).toBe(true);
        //kutsume välja done-funktsiooni
        done();
    });
});




//inner scopes have access to variables declared in outer scopes
//all specs have access to the variables defined in outer scope 
