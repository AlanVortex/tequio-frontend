package utez.edu.mx.api.project;

import jakarta.persistence.*;
import utez.edu.mx.api.user.UserEntity;

@Entity
@Table(name = "projects")
public class ProjectEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private Double targetAmount;
    private Double raisedAmount = 0.0;

    @Enumerated(EnumType.STRING)
    private ProjectStatus status; // DRAFT, FUNDING, IN_PROGRESS, COMPLETED

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private UserEntity owner;

    // Getters and Setters
}
