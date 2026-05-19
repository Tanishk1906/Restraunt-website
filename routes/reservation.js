router.post('/', async (req, res) => {
    try {
        // 1 से 20 के बीच रैंडम टेबल नंबर
        const assignedTable = Math.floor(Math.random() * 20) + 1;

        const newReservation = new Reservation({
            name: req.body.name,
            email: req.body.email,
            date: req.body.date,
            guests: req.body.guests,
            tableNumber: assignedTable 
        });

        const savedReservation = await newReservation.save();
        
        // यह नया मैसेज होना बहुत ज़रूरी है
        res.status(201).json({ 
            message: `Table booked successfully! 🥳 Your Table Number is: ${assignedTable}` 
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});