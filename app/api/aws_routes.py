import boto3
import botocore
from flask import Blueprint, request

from app.config import Config
from app.aws_s3 import *
from app.models import db, File


aws_routes = Blueprint("aws", __name__)


@aws_routes.route("/", methods=["POST"])
def upload():
    if "file" not in request.files:
        return "No user_file key in request.files"

    file = request.files["file"]
    dog_id = request.form.get("dog_id")
    if file:
        file_url = upload_file_to_s3(file, Config.S3_BUCKET)

        if dog_id == "0":
            return {"url": file_url}
        else:
            file = File(dog_id=request.form.get("dog_id"), url=file_url)
            db.session.add(file)
            db.session.commit()
            return file.to_dict()
    else:
        return "No File Attached!"


@aws_routes.route("/file")
def files():
    files = File.query.all()
    return {"files": [file.to_dict() for file in files]}

