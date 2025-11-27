package com.company.sitovetrina.security;

import io.jmix.core.JmixSecurityFilterChainOrder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.SecurityFilterChain;

import java.util.Collection;
import java.util.List;

@Configuration
public class SitoVetrinaSecurityConfiguration {

    public static class AnonymousUserDetails implements UserDetails {
        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return List.of(() -> "anonymous-role");
        }

        @Override
        public String getPassword() {
            return "";
        }

        @Override
        public String getUsername() {
            return "anonymous";
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }

    @Bean
    @Order(JmixSecurityFilterChainOrder.CUSTOM)
    public SecurityFilterChain anonymousAccessFilterChain(HttpSecurity http) throws Exception {
        http
                .securityMatcher("/home", "/login", "/public/**")
                .authorizeHttpRequests(authorize -> authorize
                        .anyRequest().permitAll()
                )
                .anonymous(anonymous -> anonymous
                        .principal(new AnonymousUserDetails())
                        .authorities("anonymous-role")
                )
                .csrf(csrf -> csrf.disable());

        return http.build();
    }
}