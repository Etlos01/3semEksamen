/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import dtos.EventDTO;
import entities.Category;
import entities.Event;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

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
    
    
    //TODO: Events Boolean allDay attribut bliver ikke gemt i databasen
    public EventDTO addEvent(EventDTO e) {
        EntityManager em = emf.createEntityManager();
        //Finder category object i databasen ud fra category string i EventDTO e
        Category category = em.find(Category.class, e.getCategory());
        Event event = new Event(e, category);
        try{
        em.getTransaction().begin();
        em.persist(event);
        em.getTransaction().commit();
        } catch (Exception error) {
            
        } finally{
            em.close();
        }
        EventDTO newE = new EventDTO(event);
        
        return newE;
        
    }
    
    
    
    
}
