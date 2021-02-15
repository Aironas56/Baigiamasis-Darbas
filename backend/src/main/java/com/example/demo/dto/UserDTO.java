package com.example.demo.dto;
import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import java.util.Set;
import java.util.stream.Collectors;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Long id;
    private String username;
    private String name;
    private String password;
    private String surname;

    @JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
    private Set<String> roles;


    public UserDTO(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.name = user.getName();
        this.surname = user.getSurname();
        this.password = user.getPassword();
        this.roles = user.getRoles().stream().map(Role::getRoleName).collect(Collectors.toSet());
    }



}
