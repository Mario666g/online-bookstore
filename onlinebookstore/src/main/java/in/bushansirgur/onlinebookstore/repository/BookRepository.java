package in.bushansirgur.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import in.bushansirgur.onlinebookstore.entity.Book;

@RepositoryRestResource(collectionResourceRel="books", path="the-books")
public interface BookRepository extends JpaRepository<Book, Long> {

}
