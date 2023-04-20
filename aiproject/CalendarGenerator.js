import java.util.*;
import java.time.*;

public class CalendarGenerator {
  static String[] months = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};

  /**
   * This method generates a calendar for a given year.
   * @param year The year for which the calendar should be generated
   */
  public static void generateCalendar(int year) {
    LocalDate currentDate = LocalDate.now();
    int currentYear = currentDate.getYear();
    int currentMonth = currentDate.getMonthValue();
    int currentDay = currentDate.getDayOfMonth();

    Calendar calendar = Calendar.getInstance();
    calendar.set(Calendar.YEAR, year);
    
    for (int i = 0; i < 12; i++) {
      System.out.println("\n" + months[i] + " " + year);
      System.out.println("Sun\tMon\tTue\tWed\tThu\tFri\tSat");
      
      calendar.set(Calendar.MONTH, i);
      calendar.set(Calendar.DAY_OF_MONTH, 1);
      
      int dayOfWeek = calendar.get(Calendar.DAY_OF_WEEK);
      
      for (int j = Calendar.SUNDAY; j < dayOfWeek; j++) {
        System.out.print("\t");
      }
      
      int lastDay = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
      
      for (int j = 1; j <= lastDay; j++) {
        if (year == currentYear && i == currentMonth - 1 && j == currentDay) {
          System.out.print("\033[32m[" + j + "]\033[0m\t");
        } else if (year < currentYear || (year == currentYear && i < currentMonth - 1) || (year == currentYear && i == currentMonth - 1 && j < currentDay)) {
          System.out.print("\033[31m" + j + "\033[0m\t");
        } else {
          System.out.print(j + "\t");
        }
        if (calendar.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY) {
          System.out.println();
        }
        calendar.add(Calendar.DAY_OF_MONTH, 1);
      }
    }
  }
  
  public static void main(String[] args) {
    Calendar calendar = Calendar.getInstance();
    int year = calendar.get(Calendar.YEAR);
    generateCalendar(year);
    Scanner sc = new Scanner(System.in);
    String YEAR;
    System.out.println("\nEnter any year (YYYY): or ('q' for exit)");
    while(( YEAR = sc.next()) != null){
      if(YEAR.equals("q")) break;
      generateCalendar(Integer.parseInt(YEAR));
      System.out.println("\nEnter any year(YYYY): or ('q' for exit)");
    }
    sc.close();
  }
}

