from django.contrib import admin

# Register your models here.
class ProjectAdmin(admin.ModelAdmin):
    readonly_fiels = ('created', 'update')

