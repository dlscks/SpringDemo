package part01;
//https://developer.mozilla.org/ko/docs/Web/Guide/AJAX/Getting_Started
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//http://localhost:8090/myapp/first.do

@Controller
public class FirstController {
	public FirstController() {
		
	}
	
	@RequestMapping("/first.do")
	public String execute() {
		return"part01/first";
	}
}
