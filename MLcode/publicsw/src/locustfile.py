from locust import HttpUser, TaskSet, task, between
class UserBehavior(TaskSet):
    @task
    def get_user_detail(self):
        user_id=1
        self.client.get(f'/user/{user_id}')
    @task
    def home(self):
        self.client.get('/')
class LocustUser(HttpUser):
    host = "127.0.0.1:5000"
    tasks = [UserBehavior]
    wait_time = between(1,4)
