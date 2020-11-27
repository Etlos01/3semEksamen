/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Nyxis
 */
@Entity
@Table(name = "events")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Events.findAll", query = "SELECT e FROM Events e"),
    @NamedQuery(name = "Events.findById", query = "SELECT e FROM Events e WHERE e.id = :id"),
    @NamedQuery(name = "Events.findByCalendarId", query = "SELECT e FROM Events e WHERE e.calendarId = :calendarId"),
    @NamedQuery(name = "Events.findByInfo", query = "SELECT e FROM Events e WHERE e.info = :info"),
    @NamedQuery(name = "Events.findByStart", query = "SELECT e FROM Events e WHERE e.start = :start"),
    @NamedQuery(name = "Events.findByStop", query = "SELECT e FROM Events e WHERE e.stop = :stop"),
    @NamedQuery(name = "Events.findByTitle", query = "SELECT e FROM Events e WHERE e.title = :title"),
    @NamedQuery(name = "Events.findByFullday", query = "SELECT e FROM Events e WHERE e.fullday = :fullday")})
public class Events implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "calendar_id")
    private Integer calendarId;
    @Size(max = 255)
    @Column(name = "info")
    private String info;
    @Size(max = 45)
    @Column(name = "start")
    private String start;
    @Size(max = 45)
    @Column(name = "stop")
    private String stop;
    @Size(max = 125)
    @Column(name = "title")
    private String title;
    @Column(name = "fullday")
    private Boolean fullday;
    @JoinColumn(name = "category", referencedColumnName = "name")
    @ManyToOne
    private Categories category;

    public Events() {
    }

    public Events(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCalendarId() {
        return calendarId;
    }

    public void setCalendarId(Integer calendarId) {
        this.calendarId = calendarId;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getStop() {
        return stop;
    }

    public void setStop(String stop) {
        this.stop = stop;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Boolean getFullday() {
        return fullday;
    }

    public void setFullday(Boolean fullday) {
        this.fullday = fullday;
    }

    public Categories getCategory() {
        return category;
    }

    public void setCategory(Categories category) {
        this.category = category;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Events)) {
            return false;
        }
        Events other = (Events) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entities.Events[ id=" + id + " ]";
    }
    
}
