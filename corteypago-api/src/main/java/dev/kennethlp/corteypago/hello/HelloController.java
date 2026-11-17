package dev.kennethlp.corteypago.hello;

import java.time.Instant;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
class HelloController {

    @GetMapping("/hello")
    Map<String, String> hello() {
        return Map.of(
                "message", "Hola desde la API",
                "timestamp", Instant.now().toString());
    }
}