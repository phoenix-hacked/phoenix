# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create Admin User
admin = User.new(first_name: 'Admin', last_name: 'User', email: 'madhurishres@gmail.com',
                 user_type: User::INDIVIDUAL, status: User::ACTIVE, role: User::ADMIN)
admin.save!

# Create First Member as a Mentee
member_one = User.new(first_name: 'Aashish', last_name: 'Manandhar', email: 'acesmndr@gmail.com',
                      user_type: User::INDIVIDUAL, status: User::ACTIVE, role: User::MEMBER)
member_one.save!

# Create Second Member as a Mentee
member_two = User.new(first_name: 'Samit', last_name: 'Ghimire', email: 'samit@cloudfactory.com',
                      user_type: User::INDIVIDUAL, status: User::ACTIVE, role: User::MEMBER)
member_two.save!

# Create Third Member as a Mentee
member_three = User.new(first_name: 'Nirdosh', last_name: 'Gautam', email: 'nrdshgtm@gmail.com',
                        user_type: User::INDIVIDUAL, status: User::ACTIVE, role: User::MEMBER)
member_three.save!

# Create Member as an institution
institution = User.new(first_name: 'CloudFactory', last_name: 'Nepal',
                       email: 'madhuri@cloudfactory', user_type: User::INSTITUTE,
                       status: User::ACTIVE, role: User::MEMBER)
institution.save!

# Create First Member as a Mentor
mentor = User.new(first_name: 'Basanti', last_name: 'Neupane', email: 'basanti@cloudfactory.com',
                  user_type: User::INDIVIDUAL, status: User::ACTIVE, role: User::MEMBER,
                  experience: { highest_education: 'Bachelors in Computer Science',
                  experience_years: '5' })
mentor.save!

# Create Second Member as a Mentor
mentor_two = User.new(first_name: 'Shiva', last_name: 'Shakti', email: 'shiva.shakti@bank.com',
                      user_type: User::INDIVIDUAL, status: User::ACTIVE, role: User::MEMBER,
                      experience: { highest_education: 'Masters in Business Administration',
                      experience_years: '5' }, social: { linkedin: 'linkedin.np/shiva.shakti',
                      twitter: 'twitter.com/shiva.shakti17' })
mentor_two.save!

# Create Third Member as a Mentor
mentor_three = User.new(first_name: 'Kulman', last_name: 'Ghising', email: 'kulman@civil.com',
                      user_type: User::INDIVIDUAL, status: User::ACTIVE, role: User::MEMBER,
                      experience: { experience_years: '25' },
                      social: { linkedin: 'linkedin.np/kulman.ghising',
                      twitter: 'twitter.com/kulman' })
mentor_three.save!

# Create a Scheduled Event
scheduled_event_description = 'Git is a free and open source distributed version control system '\
                              'and GitHub provides hosting for software development version '\
                              'control using Git. We will learn the basics and setup Git and '\
                              'in this session.'
scheduled_event = Event.new(name: 'Git and GitHub', event_type: Event::VIRTUAL,
                            meeting_link: 'https://zoom.us/', status: Event::SCHEDULED,
                            start_datetime: Time.new(2020, 6, 29, 13, 0, 0),
                            end_datetime: Time.new(2020, 6, 29, 17, 0, 0), user_id: institution.id, mentor_id: mentor.id, description: scheduled_event_description,
                            category: 'Machine Learning')
scheduled_event.save!

# Create Participants for Scheduled Event
participant_one = EventParticipant.new(event_id: scheduled_event.id, user_id: member_one.id)
participant_one.save!

participant_two = EventParticipant.new(event_id: scheduled_event.id, user_id: member_two.id)
participant_two.save!

# Create First Completed Event
description = 'Microsoft Excel is a tool that is essential for the business domain'\
              'In this session, we will be starting with the basic and key formulas '\
              'required for getting proficient in Excel.'
completed_event = Event.new(name: 'Microsoft Excel', event_type: Event::VIRTUAL,
                            meeting_link: 'https://zoom.us/', status: Event::COMPLETED,
                            start_datetime: Time.new(2020, 5, 15, 13, 0, 0),
                            end_datetime: Time.new(2020, 5, 15, 17, 0, 0), user_id: institution.id, mentor_id: mentor_two.id, description: description,
                            category: 'Accounting')
completed_event.save!

# Create Participants for Completed Event One
past_participant_one = EventParticipant.new(event_id: completed_event.id, user_id: member_one.id)
past_participant_one.save!

past_participant_two = EventParticipant.new(event_id: completed_event.id, user_id: member_two.id)
past_participant_two.save!

past_participant_three = EventParticipant.new(event_id: completed_event.id,
                                              user_id: member_three.id)
past_participant_three.save!

# Create Rating data for Completed Event One
event_rating_one = EventRating.create(event_id: completed_event.id, rating: 4,
                                      user_id: past_participant_one.id)
event_rating_one.save!

feedback = 'Good session. Key pointers clearly explained.'
event_rating_two = EventRating.create(event_id: completed_event.id, rating: 4,
                                      user_id: past_participant_two.id,
                                      feedback: feedback)
event_rating_two.save!

average_feedback = 'The session was very basic so it was not as useful to me.'
event_rating_three = EventRating.create(event_id: completed_event.id, rating: 3,
                                        user_id: past_participant_three.id,
                                        feedback: average_feedback)
event_rating_three.save!

# Create Second Completed Event
auto_cad_des = 'AutoCAD® is computer-aided design (CAD) software that architects, engineers, '\
               'and construction professionals rely on to create precise 2D and 3D drawings.'\
               'In this session, we will be learning to be proficient to use this tool.'
second_completed_event = Event.new(name: 'Learning Auto-CAD', event_type: Event::PHYSICAL,
                                   address: 'IOE, Pulchowk Campus', status: Event::COMPLETED,
                                   start_datetime: Time.new(2020, 2, 15, 10, 0, 0),
                                   end_datetime: Time.new(2020, 2, 17, 17, 0, 0),
                                   user_id: institution.id, mentor_id: mentor_three.id,
                                   description: auto_cad_des, category: 'Architecture')
                                   second_completed_event.save!

# Create Participants for Completed Event Two
autocad_participant_one = EventParticipant.new(event_id: second_completed_event.id,
                                               user_id: member_one.id)
autocad_participant_one.save!

autocad_participant_two = EventParticipant.new(event_id: second_completed_event.id,
                                               user_id: member_two.id)
autocad_participant_two.save!

autocad_participant_three = EventParticipant.new(event_id: second_completed_event.id,
                                                 user_id: member_three.id)
autocad_participant_three.save!

# Create Rating data for Completed Event Two
good_feedback = 'Good session. Key pointers clearly explained.'
autocad_event_rating_one = EventRating.create(event_id: second_completed_event.id, rating: 4,
                                              user_id: autocad_participant_one.id,
                                              feedback: good_feedback)
autocad_event_rating_one.save!

autocad_event_rating_two = EventRating.create(event_id: second_completed_event.id, rating: 4,
                                              user_id: autocad_participant_two.id)
autocad_event_rating_two.save!

thanks_feedback = 'I was able to use AutoCAD very proficiently after this session.'\
                  'This has helped boost my confidence to go on job interviews.'
autocad_event_rating_three = EventRating.create(event_id: second_completed_event.id, rating: 5,
                                                user_id: autocad_participant_three.id,
                                                feedback: thanks_feedback)
autocad_event_rating_three.save!
