describe ('Smoke tests', () => {

    it ('Should always pass', () => {
        assert.equal(true, true);
    });
    
    it ('Should pass', () => {
        expect(true).to.equal (true);
    });

});
