    // From here

    function bb() {
      return !1
    }
    $("#employee").find("h6").addClass('boldfont');
    $("#employee").find("img").removeClass('grayscale');
    $("#suparrow").addClass('hide');
    $("#supervisorProcess").hide();

    var checkindfd = new jQuery.Deferred();
    var dDate = new Date();
    var currentDate = dDate;
    var getYear = dDate.getFullYear();
    var getMonth = dDate.getMonth();
    var getDay =  dDate.getDate();
    var day = currentDate.getDate();
    
    if (day<10)
            day="0"+day;
    var month = currentDate.getMonth() + 1;
    if (month < 10){
            month = "0" +month;
    }
    
    var  year = currentDate.getFullYear();
    var CurrentDate = year +"-"+month+"-"+day;
    
    var startDate = CurrentDate +" 00:00:00";
    var endDate = CurrentDate +" 23:59:59";

 
        
      $('#startDate').datetimepicker({
                       format: 'YYYY-MM-DD',
                     sideBySide:true,
                     ignoreReadonly: true,
                     maxDate: currentDate,
                     
      });
     
      $("#startDateInput").val(CurrentDate);
       

             $.when(checkindfd).then(function(){
                     if (localStorage.getItem('keepModalOpen') == 'true') {
                             modalOpen();
                             localStorage.setItem('keepModalOpen', ' ')
                     }
             });


             $("#supervisor").click(function(){
              $("#employeeProcess").hide();
              $( "#employee" ).find("img").addClass( "grayscale" );
              $("#emparrow").addClass('hide');

              
              $("#supervisorProcess").show();
              $( "#supervisor" ).find("img").removeClass( "grayscale" );
              $("#suparrow").removeClass('hide');
              $("#supervisor").find("h6").addClass('boldfont');
              $('#supervisorProcess').addClass('animated fadeInRight');
            });

            $("#employee").click(function(){
              $("#supervisorProcess").hide();
              $( "#supervisor" ).find("img").addClass( "grayscale" );
              $("#suparrow").addClass('hide');

              
              $("#employeeProcess").show();
              $( "#employee" ).find("img").removeClass( "grayscale" );
              $("#emparrow").removeClass('hide');
              $("#employee").find("h6").addClass('boldfont');
              $('#employeeProcess').addClass('animated fadeInRight');
            });


            $.getJSON( "DataObj.json", function( data ) {
              var items = [];
              $.each( data, function( key, val ) {
                if (key == "completedTasks") {
                  $("#tasksComplete").html(val);
                }
                else if (key == "expiredTasks") {
                  $("#tasksExp").html(val);
                }
                else if (key == "totalTasks") {
                  $("#tasksCTotal").html(val);
                }
                else if (key == "rejectedTasks") {
                  $("#tasksSuspend").html(val);
                }
                else {
                  $.each( val, function( key, val ) {
                       console.log(key+ " " + val);
                      if (key == "Barbeque Area") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#barbeque").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#barbeque").append(val);
                              }
                        });
                      }
                      else if (key == "Bench Cleaning") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#bench").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#bench").append(val);
                              }
                        });
                      }
                      else if (key == "Changing Room Indoor") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#changeroomin").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#changeroomin").append(val);
                              }
                        });
                      }
                      else if (key == "Changing Room Outdoor") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#changeroomout").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#changeroomout").append(val);
                              }
                        });
                      }
                      else if (key == "Children Play Area") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#child").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#child").append(val);
                              }
                        });
                      }
                      else if (key == "Court Area") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#court").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#court").append(val);
                              }
                        });
                      }
                      else if (key == "Dog Waste Bin") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#Dog").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#Dog").append(val);
                              }
                        });
                      }
                      else if (key == "Gate House") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#gate").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#gate").append(val);
                              }
                        });
                      }
                      else if (key == "Gym Equipment") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#gym").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#gym").append(val);
                              }
                        });
                      }
                      else if (key == "Hills Road and Pavements") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#hillroad").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#hillroad").append(val);
                              }
                        });
                      }
                      else if (key == "Intersection-Corner") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#Intersection-Corner").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#Intersection-Corner").append(val);
                              }
                        });
                      }
                      else if (key == "Roundabout Cleaning") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#round").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#round").append(val);
                              }
                        });
                      }
                      else if (key == "Signage") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#Signage").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#Signage").append(val);
                              }
                        });
                      }
                      else if (key == "Sikka") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#Sikka").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#Sikka").append(val);
                              }
                        });
                      }
                      else if (key == "Swimming Pool") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#pool").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#pool").append(val);
                              }
                        });
                      }
                      else if (key == "Waste Bin") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#bin").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#bin").append(val);
                              }
                        });
                      }
                      else if (key == "Community Park Checklist") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#community").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#community").append(val);
                              }
                        });
                      }
                      else if (key == "Male And Female Toilets Checklist") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#toilets").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#toilets").append(val);
                              }
                        });
                      }
                      else if (key == "Pool Areas Checklist") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#poolchk").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#poolchk").append(val);
                              }
                        });
                      }
                      else if (key == "Security Gate House Checklist") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#security").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#security").append(val);
                              }
                        });
                      }
                      else if (key == "Sikka Checklist") {
                        $.each( val, function( key, val ) {
                          if (key == "completedTasks") {
                        $("#sikkachk").html(val + " / ");
                          }
                         else if (key == "totalTasks") {
                            $("#sikkachk").append(val);
                              }
                        });
                      }

                  });
                }
            // console.log(key+ " " + val);
                items.push( "<li id='" + key + "'>" + val + "</li>" );
              });
             
              
            });
