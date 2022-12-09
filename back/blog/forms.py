from django import forms

class PostForm(forms.Form):
    title = forms.CharField(label='Название', max_length=100)
    description = forms.CharField(label='Текст')