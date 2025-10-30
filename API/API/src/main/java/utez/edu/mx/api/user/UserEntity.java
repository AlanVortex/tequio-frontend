package utez.edu.mx.api.user;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    @Column(unique = true)
    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private UserType type; // INVESTOR or ENTREPRENEUR

    private String walletAddress; // Dirección en Stellar

    private Double reputationScore = 0.0;

    private Boolean verified = false; // KYC verification

    // Getters and Setters
}
