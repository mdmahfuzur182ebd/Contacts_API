const router = require("express").Router();

const { 
    getAllContacts,
    createContact,
    getContactById,
    updateContact,
    deleteContacts,
    
} = require("./contactsController");

router.get('/', getAllContacts);
router.post('/', createContact);
router.get('/:id', getContactById)
router.put('/:id',updateContact)
router.delete('/:id',deleteContacts)

module.exports = router;
