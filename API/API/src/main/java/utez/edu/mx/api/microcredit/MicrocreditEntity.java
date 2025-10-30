package utez.edu.mx.api.microcredit;

import jakarta.persistence.*;
import utez.edu.mx.api.investiment.InvestmentEntity;
import utez.edu.mx.api.milestone.MilestoneEntity;

import java.time.LocalDateTime;

@Entity
@Table(name = "microcredits")
public class MicrocreditEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double amount;
    private LocalDateTime releaseDate;

    @Enumerated(EnumType.STRING)
    private MicrocreditStatus status; // PENDING, RELEASED, FAILED

    @ManyToOne
    @JoinColumn(name = "investment_id")
    private InvestmentEntity investment;

    @ManyToOne
    @JoinColumn(name = "milestone_id")
    private MilestoneEntity milestone;

    private String txHash; // hash de la transacción Stellar

    // Getters and Setters
}
