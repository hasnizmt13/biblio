INSERT INTO utilisateurs (nom, prénom, email, rôle, photo, password_) VALUES
('Doe', 'John', 'john.doe@email.com', 'lecteur', 'https://exemple.com/photos/johndoe.jpg', 'password123'),
('Dupont', 'Marie', 'marie.dupont@email.com', 'bibliothécaire', 'https://exemple.com/photos/mariedupont.jpg', 'securepass456'),
('Smith', 'Anna', 'anna.smith@email.com', 'lecteur', 'https://exemple.com/photos/annasmith.jpg', 'example789'),
('Garcia', 'Carlos', 'carlos.garcia@email.com', 'lecteur', 'https://exemple.com/photos/carlosgarcia.jpg', 'mypassword101'),
('Ivanova', 'Irina', 'irina.ivanova@email.com', 'bibliothécaire', 'https://exemple.com/photos/irinaivanova.jpg', 'pass234');

INSERT INTO livres (titre, auteur, année_publication, genre, isbn, disponible, nombre_pages, description, photo) VALUES
('Les Misérables', 'Victor Hugo', 1862, 'Roman', '978-0451419439', true, 1463, 'Un roman historique qui traite des luttes sociales et politiques en France au 19e siècle.', 'https://exemple.com/photos/lesmiserables.jpg'),
('Le Petit Prince', 'Antoine de Saint-Exupéry', 1943, 'Conte philosophique', '978-0156013987', true, 96, 'Un conte poétique et philosophique sous l''apparence d''un conte pour enfants.', 'https://exemple.com/photos/lepetitprince.jpg'),
('1984', 'George Orwell', 1949, 'Fiction dystopique', '978-0451524935', true, 328, 'Un roman dystopique devenu un classique moderne sur la surveillance et le pouvoir.', 'https://exemple.com/photos/1984.jpg'),
('To Kill a Mockingbird', 'Harper Lee', 1960, 'Roman', '978-0446310789', true, 384, 'Un récit profond sur les préjugés et l’injustice dans le sud des États-Unis.', 'https://exemple.com/photos/mockingbird.jpg'),
('Pride and Prejudice', 'Jane Austen', 1813, 'Roman', '978-1503290563', true, 279, 'Une comédie de mœurs sur les travers de la société anglaise du début du 19e siècle.', 'https://exemple.com/photos/prideprejudice.jpg'),
('Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', 1997, 'Fantaisie', '978-0590353427', true, 309, 'Le premier livre de la célèbre série qui suit un jeune sorcier et ses amis à l''école de sorcellerie de Poudlard.', 'https://exemple.com/photos/harrypotter1.jpg'),
('Brave New World', 'Aldous Huxley', 1932, 'Dystopie', '978-0060929879', true, 268, 'Un roman visionnaire sur une société future dystopique où les citoyens sont génétiquement modifiés et manipulés.', 'https://exemple.com/photos/bravenewworld.jpg');

