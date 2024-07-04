const authors = require('../Models/Authors');

const authorsData1 = {
    name: 'Vinay sai',
    birth_year: 2002,
    nationality: 'India'
};

const authors1 = async () => {
    try {
        // Create a new author
        await authors.create(authorsData1);
        console.log("DATA CREATED");

        // Fetch all authors
        const allAuthors = await authors.findAll();
        console.log("THIS IS THE AUTHORS DATA");
        console.table(allAuthors.map(author => author.toJSON()));

        // Fetch a specific author by name
        const specificAuthor = await authors.findOne({ where: { name: 'Vinay sai' } });
        if (specificAuthor) {
            console.log("Specific author found:", specificAuthor.toJSON());
        } else {
            console.log("Author not found");
        }

        // Fetch authors by nationality
        const authorsByNationality = await authors.findAll({ where: { nationality: 'India' } });
        console.log("Authors by nationality:");
        console.table(authorsByNationality.map(author => author.toJSON()));

        // Update an author
        const authorId = specificAuthor.id; // Assuming specificAuthor is found and has an ID
        const newDetails = { nationality: 'USA' };
        const [updated] = await authors.update(newDetails, {
            where: { id: authorId }
        });
        if (updated) {
            console.log('Author updated successfully');
            const updatedAuthor = await authors.findByPk(authorId);
            console.log(updatedAuthor.toJSON());
        } else {
            console.log('Author not found');
        }

        // Delete an author
        const deleted = await authors.destroy({
            where: { id: authorId }
        });
        if (deleted) {
            console.log('Author deleted successfully');
        } else {
            console.log('Author not found');
        }

    } catch (error) {
        console.log("SOME THING ERROR HAPPENS", error);
    }
};

authors1();
