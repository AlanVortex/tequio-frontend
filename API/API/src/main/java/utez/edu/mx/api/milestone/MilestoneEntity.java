package utez.edu.mx.api.milestone;

import jakarta.persistence.*;
import utez.edu.mx.api.project.ProjectEntity;

@Entity
@Table(name = "milestones")
public class MilestoneEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private Double amount;

    @Enumerated(EnumType.STRING)
    private MilestoneStatus status; // PENDING, SUBMITTED, APPROVED, REJECTED

    @ManyToOne
    @JoinColumn(name = "project_id")
    private ProjectEntity project;

    // Evidencia o prueba del progreso
    private String evidenceUrl;

    // Getters and Setters
}
