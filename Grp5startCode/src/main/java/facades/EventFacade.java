/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import dtos.EventDTO;
import entities.Event;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;

/**
 *
 * @author Nyxis
 */
public class EventFacade {

    private static EntityManagerFactory emf;
    private static EventFacade instance;

    private EventFacade() {
    }

    /**
     *
     * @param _emf
     * @return the instance of this facade.
     */
    public static EventFacade getEventFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new EventFacade();
        }
        return instance;
    }

    public EventDTO addEvent(EventDTO e) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    //SELECT b, p FROM Book b, Publisher p WHERE b.fk_publisher = p.id
    //SELECT c1, c2 FROM Country c1 INNER JOIN c1.neighbors c2
    public EventDTO getEventsByCalendar(int calendarId) {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Event> query = em.createQuery("SELECT e FROM Event e INNER JOIN e.calendarList c WHERE c.id = :c_id", Event.class);
            query.setParameter("c_id", calendarId);
            return new EventDTO(query.getResultList());
        } finally {
            em.close();
        }

    }
}
