package utez.edu.mx.api.investiment;

import jakarta.persistence.*;
import utez.edu.mx.api.project.ProjectEntity;
import utez.edu.mx.api.user.UserEntity;

import java.time.LocalDateTime;

@Entity
@Table(name = "investments")
public class InvestmentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double amount;

    @ManyToOne
    @JoinColumn(name = "investor_id")
    private UserEntity investor;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private ProjectEntity project;

    @Enumerated(EnumType.STRING)
    private InvestmentStatus status; // ACTIVE, CLOSED, CANCELLED

    // Referencia al contrato inteligente o transacción
    private String contractAddress;

    private LocalDateTime createdAt = LocalDateTime.now();

    // Getters and Setters
}
