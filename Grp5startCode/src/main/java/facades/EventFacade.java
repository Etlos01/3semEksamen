/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

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
    
    
    
    
}
